import { useFeedback } from '../store/FeedbackContext';
import type { Feedback } from '../store/FeedbackContext';

interface FeedbackItemProps {
  feedback: Feedback;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  const { dispatch } = useFeedback();

  return (
    <li className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        <p className="text-gray-700 flex-1">{feedback.text}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({ type: 'LIKE_FEEDBACK', payload: feedback.id })}
            className="text-gray-400 hover:text-green-500 transition-colors duration-200 p-1 rounded-full hover:bg-green-50 flex items-center gap-1"
            aria-label="Like feedback"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{feedback.likes}</span>
          </button>
          <button
            onClick={() => dispatch({ type: 'DISLIKE_FEEDBACK', payload: feedback.id })}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 rounded-full hover:bg-red-50 flex items-center gap-1"
            aria-label="Dislike feedback"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" transform="rotate(180 10 10)" />
            </svg>
            <span className="text-sm">{feedback.dislikes}</span>
          </button>
          <button
            onClick={() => dispatch({ type: 'DELETE_FEEDBACK', payload: feedback.id })}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 rounded-full hover:bg-red-50"
            aria-label="Delete feedback"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default FeedbackItem;
  