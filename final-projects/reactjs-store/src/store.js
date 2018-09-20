import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer';


// MIDDLEWARE
const middewares = [
  // THUNK
  thunkMiddleware,
  // logger
];

// REDUX STORE
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middewares),
    // REDUX TOOLS
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default store;