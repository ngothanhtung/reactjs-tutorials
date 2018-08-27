import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;