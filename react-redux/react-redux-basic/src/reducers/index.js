import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import musicReducer from './musicReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  musicReducer,
});

export default rootReducer;