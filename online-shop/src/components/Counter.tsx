import React from 'react';

type Props = {};

export default function Counter({}: Props) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((x) => x - 1);
        }}
      >
        -
      </button>
      {count}

      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
