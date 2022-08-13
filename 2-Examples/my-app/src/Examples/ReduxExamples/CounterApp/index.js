import React from 'react';
import CounterLabel from './components/CounterLabel';
import DecreaseCounterButton from './components/DecreaseCounterButton';
import IncreaseCounterButton from './components/IncreaseCounterButton';

function CounterApp() {
  return (
    <div>
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
