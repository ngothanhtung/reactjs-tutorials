import { createStore } from 'redux';
import rootReducer from './reducers';

// REDUX STORE
const store = createStore(
  rootReducer,
  // REDUX TOOLS
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;