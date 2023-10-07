import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposite, withdraw, withdrawAsync } from '../actions';

function BankComponent() {
  const dispatch = useDispatch();
  const { balance, loading } = useSelector((state) => state.bankReducer);
  return (
    <div>
      <h1>{balance}</h1>

      <button
        className='btn btn-primary'
        onClick={() => {
          dispatch(deposite(5000000));
        }}
      >
        Deposite
      </button>

      <button
        className='btn btn-danger'
        onClick={() => {
          dispatch(withdraw(100));
        }}
      >
        Withdraw
      </button>

      <button
        disabled={loading}
        className='btn btn-warning'
        onClick={() => {
          dispatch(withdrawAsync(1));
        }}
      >
        {loading && 'Processing ...'}
        {!loading && 'Withdraw Async'}
      </button>
    </div>
  );
}

export default BankComponent;
