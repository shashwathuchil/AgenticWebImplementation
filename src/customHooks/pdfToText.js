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

  /**
   * Extracts text from a PDF File object
   * @param {File} file - PDF file
   */
  const extractTextFromPdf = async (file) => {
    setLoading(true);
    setError('');
    setText('');
    try {
      pdfToText(file)
        .then((text) => {
          setText(text);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to extract text from PDF.');
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
      setError('Error reading PDF file.');
    }
  };

  return { text, error, loading, extractTextFromPdf };
}
