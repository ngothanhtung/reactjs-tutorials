import React, { Component } from 'react';

export default class UserComponent extends Component {
  componentWillMount() {
    this.props.getUsersAsync();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
