import * as ActionTypes from '../constants/actionTypes';

// Action Creator
export const deposite = (money) => ({
  type: ActionTypes.BANK_DEPOSIT, // ACTION TYPE
  money: money, // PARAMETER
});

// Action Creator
export const withdraw = (money) => ({
  type: ActionTypes.BANK_WITHDRAW, // ACTION TYPE
  money: money, // PARAMETER
});

// ------------------------------------------------------------

export const withdrawAsync = (money) => {
  return (dispatch) => {
    dispatch(withdrawPending());
    withdrawDelay(money)
      .then((result) => {
        dispatch(withdrawSuccess(result));
      })
      .catch((error) => {
        dispatch(withdrawError(error));
      });
  };
};

// Action Creator
const withdrawSuccess = (result) => ({
  type: ActionTypes.BANK_WITHDRAW_SUCCESS, // ACTION TYPE
  money: result, // PARAMETER
});

// Action Creator
const withdrawPending = () => ({
  type: ActionTypes.BANK_WITHDRAW_PENDING, // ACTION TYPE
});

// Action Creator
const withdrawError = (error) => ({
  type: ActionTypes.BANK_WITHDRAW_ERROR, // ACTION TYPE
  error: error, // PARAMETER
});

// faked promise function
const withdrawDelay = (money) => {
  return new Promise((resolve, reject) => {
    if (money <= 0) {
      //reject('Money is invalid');
      setTimeout(reject, 1000, 'Money is invalid');
    } else {
      setTimeout(resolve, 1000, money);
    }
  });
};
