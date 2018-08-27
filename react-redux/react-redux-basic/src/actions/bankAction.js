import * as ActionTypes from '../constants/actionTypes';
// BANK
export const deposite = (money) => ({
  type: ActionTypes.BANK_DEPOSIT, // ACTION TYPE
  money: money // PARAMETER
});

export const withdraw = (money) => ({
  type: ActionTypes.BANK_WITHDRAW, // ACTION TYPE
  money: money // PARAMETER
});
// ------------------------------------------------------------