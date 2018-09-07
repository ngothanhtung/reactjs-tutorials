import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hello State'
    };
  }

  render() {
    return (
      <div>
        <h3>
          {this.state.name}
        </h3>
        <input type="text" onChange={(e) => {
          this.setState({
            name: e.target.value,
          });
        }} />
        <button
          onClick={() => {
            this.setState({
              name: 'Hello New State'
            });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default StateExample;