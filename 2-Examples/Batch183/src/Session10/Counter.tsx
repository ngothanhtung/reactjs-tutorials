import React from 'react';
import DecreaseButton from './DecreaseButton';
import CounterLabel from './CounterLabel';
import IncreaseButton from './IncreaseButton';

type Props = {};

export default function Counter({}: Props) {
  return (
    <div>
      <DecreaseButton />
      <CounterLabel />
      <IncreaseButton />
    </div>
  );
}
