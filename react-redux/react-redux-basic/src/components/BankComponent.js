import React, { Component } from 'react';


export default class componentName extends Component {

  render() {
    return (
      <div>
        <h1>
          {
            this.props.balance
          }
        </h1>
        <button
          onClick={() => {
            this.props.deposite(5000000);
          }}
        >Deposite</button>
        <button
          onClick={() => {
            this.props.withdraw(1000000);
          }}
        >Withdraw</button>
      </div>
    );
  }
}
