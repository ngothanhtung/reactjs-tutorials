import React, { Component } from 'react';
import { Provider } from 'react-redux';

// REDUX STORE
import store from './configs/store';

// APPS
import Login from './containers/loginContainer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container" style={{ marginTop: 20 }}>
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;

