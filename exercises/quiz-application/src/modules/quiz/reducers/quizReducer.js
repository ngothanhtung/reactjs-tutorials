import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  questions: null,
  score: 0,
  loading: false,
  error: null
};

const quizReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ----------------------------------------------------
    // LOGIN
    case ActionTypes.GET_QUESTIONS_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        loading: false,
        error: null
      };
    case ActionTypes.GET_QUESTIONS_ERROR:
      return {
        ...state,
        questions: null,
        error: action.error,
        loading: false
      };
    case ActionTypes.POST_ANSWER:
      const newScore = state.score + action.score;
      return {
        ...state,
        score: newScore,
      };
    // ----------------------------------------------------    
    // DEFAULT
    default:
      return state;
  }
}

export default quizReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax