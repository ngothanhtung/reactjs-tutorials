import React, { Component } from 'react';
import { Provider } from 'react-redux';

// REDUX STORE
import store from './configs/store';

// APPS
import Login from './containers/loginContainer';
import LoginName from './containers/loginNameContainer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container" style={{ marginTop: 20 }}>
          <LoginName />
          <hr />
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;

