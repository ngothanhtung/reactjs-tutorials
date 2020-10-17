import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const myIncrement = createAction('MY-INCREMENT');
console.log(myIncrement());

const myCounter = createReducer(0, {
  [myIncrement]: (state) => state + 1,
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    myCounter: myCounter,
  },
});
