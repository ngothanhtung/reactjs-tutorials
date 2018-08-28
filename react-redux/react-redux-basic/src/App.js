import React, { Component } from 'react';
import { Provider } from 'react-redux';

// REDUX STORE
import store from './store';

// APPS
import CounterApp from './CounterApp';
import MusicApp from './MusicApp';
import BankApp from './BankApp';

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

