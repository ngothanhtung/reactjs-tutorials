import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// REDUX THUNK
import thunkMiddleware from 'redux-thunk';

// MIDDLEWARE
const middewares = [
  // THUNK
  thunkMiddleware,
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