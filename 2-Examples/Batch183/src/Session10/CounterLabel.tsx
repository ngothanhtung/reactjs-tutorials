import React from 'react';
import useCounterStore, { CounterState } from './hooks/useCounterStore';

type Props = {};

export default function CounterLabel({}: Props) {
  const count = useCounterStore((state: CounterState) => state.count);
  return <h1>{count}</h1>;
}
