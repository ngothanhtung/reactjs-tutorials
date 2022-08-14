import React from 'react';

import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import BankApp from './BankApp';
import store from './store';

function ReduxToolkitExamples() {
  return (
    <Provider store={store}>
      <CounterApp />
      <BankApp />
    </Provider>
  );
}

export default ReduxToolkitExamples;
