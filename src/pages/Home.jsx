import React, { useState } from 'react';
import usePdfToText from '../customHooks/pdfToText';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB


const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const { text, error: extractError, loading, extractTextFromPdf } = usePdfToText();

    // Function to access file context (e.g., read file content)
    const getFileContext = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    const handleFileChange = async (e) => {
        setError('');
        setUploadSuccess(false);
        const file = e.target.files[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            setError('Only PDF files are allowed.');
            return;
        }
        if (file.size > MAX_FILE_SIZE) {
            setError('File size must be less than 2MB.');
            return;
        }

        setSelectedFile(file);
    };

    const getTextFromPdf = async () => {
        if (!selectedFile) {
            setError('No file selected.');
            return;
        }
        await extractTextFromPdf(selectedFile);
    }

    return (
        <div className="home">
            <h1>Welcome to My React SPA</h1>
            <p>This is the home page of the application.</p>
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
            />
            <button onClick={getTextFromPdf} disabled={!selectedFile || loading}>
                Extract PDF Text
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {extractError && <p style={{ color: 'red' }}>{extractError}</p>}
            {uploadSuccess && <p style={{ color: 'green' }}>Upload successful!</p>}
            {loading && <p>Extracting text...</p>}
            {text && (
                <div>
                    <h3>Extracted Text:</h3>
                    <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}>{text}</pre>
                </div>
            )}
        </div>
    );
};

export default Home;