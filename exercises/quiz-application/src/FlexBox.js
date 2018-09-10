import React, { Component } from 'react';

export default class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 2, height: 100, backgroundColor: 'red' }}> textInComponent </div>
        <div style={{ flex: 1, height: 100, backgroundColor: 'yellow' }}> textInComponent </div>
      </div>
    );
  }
}
