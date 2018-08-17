import { combineReducers } from 'redux';
import products from './products';

// Combine reducers
const productApp = combineReducers({
    products    
});

export default productApp;
