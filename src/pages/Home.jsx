import React, { useState, useRef } from 'react';
import usePdfToText from '../customHooks/pdfToText';
import useQnA from '../customHooks/aiLogic';
import './Home.css';

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB


const Home = () => {
    const [error, setError] = useState('');
    const { text, error: extractError, loading, extractSuccess, extractTextFromPdf } = usePdfToText();
    const { answer, loading: qnaLoading, error: qnaError, askQuestion } = useQnA();
    const [question, setQuestion] = useState('');
    const [chat, setChat] = useState([]); // [{role: 'user'|'ai', content: string}]
    const chatEndRef = useRef(null);


    const handleFileChange = async (e) => {
        setError('');
        const file = e.target.files[0];
        if (!file) return;
        if (file.type !== 'application/pdf') {
            setError('Only PDF files are allowed.');
            return;
        }
        if (file.size > MAX_FILE_SIZE) {
            setError('File size must be less than 4MB.');
            return;
        }
        await extractTextFromPdf(file);
    }


    // Scroll to bottom of chat when chat updates
    React.useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chat]);

    // Add AI answer(s) to chat when answer state updates
    React.useEffect(() => {
        if (answer && !qnaLoading) {
            if (Array.isArray(answer) && answer.length > 0) {
                setChat((prev) => [
                    ...prev,
                    { role: 'ai', content: answer.map(a => a.text).join('\n') }
                ]);
            } else if (Array.isArray(answer) && answer.length === 0) {
                setChat((prev) => [
                    ...prev,
                    { role: 'ai', content: 'No answer found.' }
                ]);
            }
        }
        // eslint-disable-next-line
    }, [answer, qnaLoading]);

    return (
        <>
            {qnaError && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Error</h2>
                        <p>{qnaError}</p>
                        <button onClick={() => window.location.reload()} className="modal-close-btn">Close</button>
                    </div>
                </div>
            )}
            <div className="chatgpt-container">
                <div className="chatgpt-header">
                    <h1>PDF QnA Chat</h1>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="chatgpt-file-input"
                    />
                    {loading && <p className="chatgpt-info">Extracting text from PDF...</p>}
                    {error && <p className="chatgpt-error">{error}</p>}
                    {extractError && <p className="chatgpt-error">{extractError}</p>}
                </div>
                <div className="chatgpt-chat-window">
                    {extractSuccess ? (
                        <>
                            {chat.length === 0 && (
                                <div className="chatgpt-welcome">Ask anything about your PDF!</div>
                            )}
                            {chat.map((msg, idx) => (
                                <div key={idx} className={`chatgpt-message ${msg.role === 'user' ? 'user' : 'ai'}`}>
                                    <div className="chatgpt-message-content">{msg.content}</div>
                                </div>
                            ))}
                            {qnaLoading && (
                                <div className="chatgpt-message ai">
                                    <div className="chatgpt-message-content">Thinking...</div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </>
                    ) : (
                        <div className="chatgpt-welcome">Upload a PDF to start chatting!</div>
                    )}
                </div>
                {text && (
                    <form
                        className="chatgpt-input-row"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            if (!question.trim()) return;
                            setChat((prev) => [...prev, { role: 'user', content: question }]);
                            setQuestion('');
                            try {
                                await askQuestion(question, text);
                            } catch {}
                        }}
                    >
                        <input
                            type="text"
                            className="chatgpt-input"
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                            placeholder="Ask a question about the PDF..."
                            disabled={qnaLoading}
                        />
                        <button
                            type="submit"
                            className="chatgpt-send-btn"
                            disabled={!question.trim() || qnaLoading}
                        >
                            {qnaLoading ? '...' : 'Send'}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};

export default Home;