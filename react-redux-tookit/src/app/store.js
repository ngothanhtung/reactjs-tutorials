import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const myIncrement = createAction('MY-INCREMENT');

const myCounter = createReducer(0, {
  [myIncrement]: (state) => state + 1,
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    myCounter: myCounter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
