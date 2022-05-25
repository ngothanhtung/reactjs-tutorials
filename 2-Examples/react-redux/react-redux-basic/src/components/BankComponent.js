import React, { Component } from 'react';

// IMPORT STORE ANYWHERE
import store from '../store';
export default class componentName extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.balance}</h1>

        <button className="btn btn-primary" onClick={() => {
          this.props.deposite(5000000);
        }}>Deposite</button>

        <button className="btn btn-danger" onClick={() => {
          this.props.withdraw(1000000);
          // USING STORE AND CALL DISPATCH ANYWHERE
          // store.dispatch({ type: 'BANK_WITHDRAW', money: 1 });
        }}>Withdraw</button>

        <button
          disabled={this.props.loading}
          className="btn btn-warning"
          onClick={() => {
            this.props.withdrawAsync(1);
            // USING STORE AND CALL DISPATCH ANYWHERE
            // store.dispatch({ type: 'BANK_WITHDRAW', money: 1 });
          }}>
          {
            this.props.loading && "Processing ..."
          }
          {
            !this.props.loading && "Withdraw Async"
          }
        </button>
      </div>
    );
  }
}
