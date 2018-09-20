import { combineReducers } from 'redux';
import shoppingCartReducer from './modules/shoppingCart/reducers';
import authReducer from './modules/auth/reducers';


// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  shoppingCartReducer,
  authReducer,
});

export default rootReducer;