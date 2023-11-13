import React from 'react';
import useCounterStore, { CounterState } from './hooks/useCounterStore';

type Props = {};

export default function DecreaseButton({}: Props) {
  const { decreaseCount } = useCounterStore((state: CounterState) => state);
  return (
    <button
      onClick={() => {
        // TODO: Decrease count
        decreaseCount(5);
      }}
    >
      Increase Count
    </button>
  );
}
