import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// REDUX THUNK
import thunkMiddleware from 'redux-thunk';

// CUSTOM LOGGER MIDDLEWARE
// const logger = ({ getState }) => {
//   return next => action => {
//     console.log('state before dispatch', getState())
//     console.log('will dispatch', action)

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action)

//     console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }
// }

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