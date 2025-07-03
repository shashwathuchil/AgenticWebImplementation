import { useState } from 'react';
import * as qna from '@tensorflow-models/qna';
import '@tensorflow/tfjs';

/**
 * Custom hook for Question Answering using @tensorflow-models/qna
 * @returns {Object} { answer, loading, error, askQuestion }
 */
export default function useQnA() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [model, setModel] = useState(null);

  // Load the model once
  const loadModel = async () => {
    if (!model) {
      try {
        setLoading(true);
        const loadedModel = await qna.load();
        setModel(loadedModel);
        setLoading(false);
        return loadedModel;
      } catch (err) {
        setError('Failed to load QnA model.');
        setLoading(false);
        return null;
      }
    }
    return model;
  };

  /**
   * Ask a question based on a context string
   * @param {string} question - The question to ask
   * @param {string} context - The context to search for the answer
   */
  const askQuestion = async (question, context) => {
    setLoading(true);
    setError('');
    setAnswer(null);
    try {
      const loadedModel = await loadModel();
      if (!loadedModel) return;
      const answers = await loadedModel.findAnswers(question, context);
      setAnswer(answers);
      console.log('Answers:', answers);
      
    } catch (err) {
      setError('Failed to get answer.');
    } finally {
      setLoading(false);
    }
  };

  return { answer, loading, error, askQuestion };
}
