import { combineReducers } from 'redux';
import loginReducer from '../modules/quiz/reducers/loginReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;