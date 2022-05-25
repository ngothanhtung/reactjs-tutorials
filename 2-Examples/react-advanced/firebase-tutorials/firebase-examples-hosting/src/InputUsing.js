import React, { Component } from 'react';
import Input from './Input';

class InputUsing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.inputValue}
          onChangeText={(text) => { this.setState({ inputValue: text }); }}
        />
        <h2>
          {this.state.inputValue}
        </h2>
      </div>
    );
  }
}

export default InputUsing;
