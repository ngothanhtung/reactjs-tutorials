import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './CounterApp/reducers';
import bankReducers from './BankApp/reducers';

export default configureStore({
  reducer: {
    counter: counterReducers,
    bank: bankReducers,
  },
});
