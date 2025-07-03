import { useState } from 'react';
import pdfToText from 'react-pdftotext';

/**
 * Custom hook to extract text from a PDF file using react-pdftotext
 * @returns {Object} { text, error, loading, extractTextFromPdf }
 */
export default function usePdfToText() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [extractSuccess, setExtractSuccess] = useState(false);

  /**
   * Extracts text from a PDF File object
   * @param {File} file - PDF file
   */
  const extractTextFromPdf = async (file) => {
    setLoading(true);
    setError('');
    setText('');
    setExtractSuccess(false);
    try {
      pdfToText(file)
        .then((text) => {
          setText(text);
          console.log('Extracted text:', text);
          setExtractSuccess(true);
          setLoading(false);
        })
        .catch((err) => {
          if(file === 'reset') {
            setText('');
            setLoading(false);
            setExtractSuccess(false);
          } else{
            setError('Failed to extract text from PDF.');
            setExtractSuccess(false);
            console.log('Error extracting text:', err);
            setLoading(false);}
        });
    } catch (e) {
      setLoading(false);
      setExtractSuccess(false);
      console.log('Error extracting text:', e);
      setError('Error reading PDF file.');
    }
  };

  return { text, error, loading, extractSuccess, extractTextFromPdf };
}
