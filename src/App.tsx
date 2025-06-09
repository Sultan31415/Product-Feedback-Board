import { FeedbackProvider } from './store/FeedbackContext';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackSort from './components/FeedbackSort';

const App = () => {
  return (
    <FeedbackProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
        <main className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">🗳 Product Feedback Board</h1>
            <p className="text-gray-600">Share your ideas and suggestions to help us improve!</p>
          </div>
          <FeedbackStats />
          <FeedbackSort />
          <FeedbackForm />
          <FeedbackList />
        </main>
      </div>
    </FeedbackProvider>
  );
};

export default App;
