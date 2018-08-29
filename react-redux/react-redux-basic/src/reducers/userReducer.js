import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  users: null,
  loading: false,
  error: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.USER_CREATE_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_CREATE_SUCCESS:
      return { ...state, users: state.users, loading: false, error: null };
    case ActionTypes.BANK_WITHDRAW_ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

export default userReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax