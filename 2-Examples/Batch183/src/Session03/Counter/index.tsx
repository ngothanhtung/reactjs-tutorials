import React from 'react';
import styles from './Counter.module.css';

type Props = {};

export default function Counter({}: Props) {
  // let count = 0;
  const [count, setCount] = React.useState(0);
  console.log('Render');
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          // count--;
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <strong>Count: {count}</strong>
      <button
        onClick={() => {
          // count++;
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}
