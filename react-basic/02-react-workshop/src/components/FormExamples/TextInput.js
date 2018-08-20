import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    // Code here:
    this.state = {
      invalid: false,
      value: props.value,
    }
  }
  render() {
    return (
      <input
        style={this.state.invalid ? { border: '1px solid red' } : { border: '1px solid black' }}
        className="form-control"
        placeholder="Enter you text"
        value={this.state.value}
        type="text"
        onChange={(e) => {
          let value = e.target.value;
          this.setState({ value: value });
          if (value.length === 0) {
            this.setState({ invalid: true });
          }
          else {
            this.setState({ invalid: false });
          }

          // Callback					          
          this.props.onChange(value);
        }} />
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired
}