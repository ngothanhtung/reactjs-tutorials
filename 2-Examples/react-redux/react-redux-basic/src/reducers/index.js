import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import musicReducer from './musicReducer';
import bankReducer from './bankReducer';
import userReducer from './userReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  musicReducer,
  bankReducer,
  userReducer,
});

export default rootReducer;