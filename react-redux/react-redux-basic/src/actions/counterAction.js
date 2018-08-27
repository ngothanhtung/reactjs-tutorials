import * as ActionTypes from '../constants/actionTypes';
// COUNTER
export const increaseCount = (number) => ({
  type: ActionTypes.COUNTER_INCREASE_COUNT, // ACTION TYPE
  number: number // PARAMETER
});

export const decreaseCount = (number) => ({
  type: ActionTypes.COUNTER_DECREASE_COUNT, // ACTION TYPE
  number: number //PARAMETER
});
// ------------------------------------------------------------