import { combineReducers } from 'redux';
import loginReducer from '../modules/quiz/reducers/loginReducer';
import quizReducer from '../modules/quiz/reducers/quizReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  loginReducer,
  quizReducer,
});

export default rootReducer;