import { combineReducers } from 'redux';
import shoppingCartReducer from './modules/shoppingCart/reducers';


// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  shoppingCartReducer,
});

export default rootReducer;