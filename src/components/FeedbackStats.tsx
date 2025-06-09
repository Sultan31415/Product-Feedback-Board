import { useFeedback } from '../store/FeedbackContext';

const FeedbackStats = () => {
  const { state } = useFeedback();
  const totalFeedbacks = state.feedbacks.length;
  const totalLikes = state.feedbacks.reduce((acc, fb) => acc + fb.likes, 0);
  const totalDislikes = state.feedbacks.reduce((acc, fb) => acc + fb.dislikes, 0);

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">{totalFeedbacks}</p>
          <p className="text-sm text-gray-600">Total Feedback</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">{totalLikes}</p>
          <p className="text-sm text-gray-600">Total Likes</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">{totalDislikes}</p>
          <p className="text-sm text-gray-600">Total Dislikes</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStats; 