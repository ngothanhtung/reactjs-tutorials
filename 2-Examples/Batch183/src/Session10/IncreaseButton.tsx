import React from 'react';
import useCounterStore, { CounterState } from './hooks/useCounterStore';

type Props = {};

export default function IncreaseButton({}: Props) {
  const { increaseCount } = useCounterStore((state: CounterState) => state);

  return (
    <button
      onClick={() => {
        // TODO: Increase count
        increaseCount(10);
      }}
    >
      Increase Count
    </button>
  );
}
