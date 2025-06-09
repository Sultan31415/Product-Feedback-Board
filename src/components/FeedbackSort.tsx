import { useFeedback } from '../store/FeedbackContext';

const FeedbackSort = () => {
  const { state, dispatch } = useFeedback();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700">
          Sort by:
        </label>
        <select
          id="sort"
          value={state.sortBy}
          onChange={(e) => dispatch({ type: 'SET_SORT', payload: e.target.value as 'popular' | 'date' })}
          className="ml-2 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        >
          <option value="date">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>
  );
};

export default FeedbackSort; 