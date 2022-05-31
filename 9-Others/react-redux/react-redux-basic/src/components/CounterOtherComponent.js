import React, { Component } from 'react';

export default class CounterComponent extends Component {
  render() {
    return (
      <div>
        <h1>Other: {this.props.doubleCount} </h1>
      </div>
    );
  }
}
