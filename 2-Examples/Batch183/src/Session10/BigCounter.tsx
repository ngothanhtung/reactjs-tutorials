import React from 'react';
import useCounterStore, { CounterState } from './hooks/useCounterStore';

type Props = {};

export default function BigCounter({}: Props) {
  const count = useCounterStore((state: CounterState) => state.count);
  return (
    <div>
      <h1 style={{ color: 'red' }}>{count}</h1>
    </div>
  );
}
