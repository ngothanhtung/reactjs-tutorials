import React, { Component } from 'react';
import { Provider } from 'react-redux';

// REDUX STORE
import store from './store';

// APPS
import CounterApp from './CounterApp';
import BankApp from './BankApp';
import UserApp from './UsersApp';

function ReduxExamples() {
  return (
    <Provider store={store}>
      <div style={{ padding: 24 }}>
        <CounterApp />
        {/* <BankApp /> */}
        {/* <UserApp /> */}
      </div>
    </Provider>
  );
}

export default ReduxExamples;
