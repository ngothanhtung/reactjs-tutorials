import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

// APPS
import CounterApp from './CounterApp';
import MusicApp from './MusicApp';
import BankApp from './BankApp';

// REDUX STORE
const store = createStore(
  rootReducer,
  // REDUX TOOLS
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container" style={{ marginTop: 20 }}>
          <CounterApp />
          <hr />
          <MusicApp />
          <hr />
          <BankApp />
        </div>
      </Provider>
    );
  }
}

export default App;

