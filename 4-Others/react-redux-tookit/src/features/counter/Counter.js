import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { decrement, increment, incrementByAmount, incrementAsync, fetchUsers, selectCount } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label='Set increment amount' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </button>

        <button
          className={styles.asyncButton}
          onClick={async () => {
            dispatch(fetchUsers())
              .then(unwrapResult)
              .then((originalPromiseResult) => {
                console.log('originalPromiseResult', originalPromiseResult);
              })
              .catch((serializedError) => {
                console.log('serializedError', serializedError);
              });
          }}
        >
          Fetch Users Async
        </button>
      </div>
    </div>
  );
}
