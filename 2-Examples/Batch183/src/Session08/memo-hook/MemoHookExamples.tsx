import React from 'react';
import Counter from './Counter';

type Props = {};

export default function MemoHookExamples({}: Props) {
  const [count1, setCount1] = React.useState(10);
  const [count2, setCount2] = React.useState(20);

  return (
    <div>
      <h1>MEMO HOOK</h1>
      <Counter count={count1} text='Counter 1' />

      <button
        onClick={() => {
          setCount1((c) => c + 1);
        }}
      >
        Increase Count 1
      </button>
      <Counter count={count2} text='Counter 2' />
      <button
        onClick={() => {
          setCount2((c) => c + 1);
        }}
      >
        Increase Count 2
      </button>
    </div>
  );
}
