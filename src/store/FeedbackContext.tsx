import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

// Types
export interface Feedback {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
  createdAt: number;
}

interface FeedbackState {
  feedbacks: Feedback[];
  sortBy: 'popular' | 'date';
}

type FeedbackAction =
  | { type: 'ADD_FEEDBACK'; payload: string }
  | { type: 'DELETE_FEEDBACK'; payload: number }
  | { type: 'LIKE_FEEDBACK'; payload: number }
  | { type: 'DISLIKE_FEEDBACK'; payload: number }
  | { type: 'SET_SORT'; payload: 'popular' | 'date' };

// Initial state
const initialState: FeedbackState = {
  feedbacks: [],
  sortBy: 'date',
};

// Reducer
function feedbackReducer(state: FeedbackState, action: FeedbackAction): FeedbackState {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return {
        ...state,
        feedbacks: [
          {
            id: Date.now(),
            text: action.payload,
            likes: 0,
            dislikes: 0,
            createdAt: Date.now(),
          },
          ...state.feedbacks,
        ],
      };

    case 'DELETE_FEEDBACK':
      return {
        ...state,
        feedbacks: state.feedbacks.filter((fb) => fb.id !== action.payload),
      };

    case 'LIKE_FEEDBACK':
      return {
        ...state,
        feedbacks: state.feedbacks.map((fb) =>
          fb.id === action.payload ? { ...fb, likes: fb.likes + 1 } : fb
        ),
      };

    case 'DISLIKE_FEEDBACK':
      return {
        ...state,
        feedbacks: state.feedbacks.map((fb) =>
          fb.id === action.payload ? { ...fb, dislikes: fb.dislikes + 1 } : fb
        ),
      };

    case 'SET_SORT':
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
}

// Context
interface FeedbackContextType {
  state: FeedbackState;
  dispatch: React.Dispatch<FeedbackAction>;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

// Provider
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  return (
    <FeedbackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  );
}

// Custom hook
export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
}
