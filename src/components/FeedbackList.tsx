import { useFeedback } from '../store/FeedbackContext';
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const { state } = useFeedback();
  const { feedbacks, sortBy } = state;

  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    if (sortBy === 'popular') {
      // Calculate popularity score (likes minus dislikes)
      const aScore = a.likes - a.dislikes;
      const bScore = b.likes - b.dislikes;
      
      // If scores are equal, sort by most recent
      if (aScore === bScore) {
        return b.createdAt - a.createdAt;
      }
      
      return bScore - aScore;
    }
    // Sort by most recent
    return b.createdAt - a.createdAt;
  });

  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-400 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <p className="text-gray-500 text-lg">No feedback yet.</p>
        <p className="text-gray-400 text-sm mt-1">Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {sortBy === 'popular' ? 'Most Popular Feedback' : 'Most Recent Feedback'}
      </h2>
      <ul className="space-y-3">
        {sortedFeedbacks.map((fb) => (
          <FeedbackItem key={fb.id} feedback={fb} />
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
