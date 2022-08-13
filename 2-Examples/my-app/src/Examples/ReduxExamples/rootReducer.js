import { combineReducers } from 'redux';

import counterReducer from './CounterApp/reducers';
// import bankReducer from './BankApp/reducers';
import userReducer from './UsersApp/reducers';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  // bankReducer,
  userReducer,
});

export default rootReducer;
