import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input
        className="form-control"
        placeholder="Enter you text"
        value={this.props.value}
        type="text"
        onChange={(e) => {
          let text = e.target.value;
          this.props.onChangeText(text);
          // (text) => { this.setState({ inputValue: text });
          // function (text) { this.setState({ inputValue: text }); }
        }} />
    );
  }
}

export default Input;