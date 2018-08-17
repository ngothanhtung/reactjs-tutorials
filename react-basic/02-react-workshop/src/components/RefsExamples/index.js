/*
The ref is used to return a reference to your element.
Refs should be avoided in most cases but they can be useful
when you need DOM measurements or to add methods to your components.
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RefsExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }

    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  clearInput() {
    this.setState({ data: '' });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input value={this.state.data} onChange={this.updateState} ref="myInput"></input>
        <button onClick={this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default RefsExample;
