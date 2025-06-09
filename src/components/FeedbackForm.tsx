import { useState } from 'react';
import { useFeedback } from '../store/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useFeedback();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_FEEDBACK', payload: text.trim() });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="feedback" className="text-sm font-medium text-gray-700">
          Share your feedback
        </label>
        <div className="flex gap-2">
          <input
            id="feedback"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your idea here..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <span>Add</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
