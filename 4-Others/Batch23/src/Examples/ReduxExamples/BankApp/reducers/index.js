import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  balance: 100,
  loading: false,
  error: null,
};

const bankReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.BANK_DEPOSIT:
      return { ...state, balance: state.balance + action.money };

    case ActionTypes.BANK_WITHDRAW:
      return { ...state, balance: state.balance - action.money };

    // ASYNC
    case ActionTypes.BANK_WITHDRAW_PENDING:
      return { ...state, loading: true };

    case ActionTypes.BANK_WITHDRAW_SUCCESS:
      return { ...state, balance: state.balance - action.money, loading: false, error: null };

    case ActionTypes.BANK_WITHDRAW_ERROR:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default bankReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
