import React, { Component } from 'react';

class RequiredInput extends Component {
  constructor(props) {
    super(props);
    // Code here:
    this.state = {
      invalid: false,
      text: '',
    }
  }
  render() {
    return (
      <input
        style={this.state.invalid ? { border: '1px solid red' } : { border: '1px solid black' }}
        className="form-control"
        placeholder="Enter you text"
        value={this.state.text}
        type="text"
        onChange={(e) => {
          let text = e.target.value;
          this.setState({ text: text });
          if (text.length === 0) {
            this.setState({ invalid: true });
          }
          else {
            this.setState({ invalid: false });
          }
          this.props.onChangeText(text);
          // (text) => { this.setState({ inputValue: text });
          // function (text) { this.setState({ inputValue: text }); }
        }} />
    );
  }
}

export default RequiredInput;