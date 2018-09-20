import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  loggedInUser: null,
  loading: false,
  error: null
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ----------------------------------------------------
    // LOGIN
    case ActionTypes.AUTH_LOGIN_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.loggedInUser,
        loading: false,
        error: null
      };
    case ActionTypes.AUTH_LOGIN_ERROR:
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

export default authReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax