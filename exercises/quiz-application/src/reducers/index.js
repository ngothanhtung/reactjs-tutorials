import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;