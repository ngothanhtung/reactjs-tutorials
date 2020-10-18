import { combineReducers } from 'redux';
import { createReducer, createAction } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';

const myIncrement = createAction('MY-INCREMENT');

const myCounterReduce = createReducer(0, {
  [myIncrement]: (state) => state + 1,
});

const rootReducer = combineReducers({
  counter: counterReducer,
  myCounter: myCounterReduce,
  auth: authReducer,
});

export default rootReducer;
