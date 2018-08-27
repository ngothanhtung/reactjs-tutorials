import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import musicReducer from './musicReducer';
import bankReducer from './bankReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  musicReducer,
  bankReducer,
});

export default rootReducer;