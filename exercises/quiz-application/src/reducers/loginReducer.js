import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  loggedInUser: null,
  loading: false,
  error: null
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ----------------------------------------------------
    // LOGIN
    case ActionTypes.LOGIN_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.loggedInUser,
        loading: false,
        error: null
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loggedInUser: null,
        error: action.error,
        loading: false
      };
    // ----------------------------------------------------    
    // DEFAULT
    default:
      return state;
  }
}

export default loginReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax