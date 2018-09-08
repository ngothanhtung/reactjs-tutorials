import React, { Component } from 'react';


export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {
          this.props.loggedInUser &&
          <h3>Welcome {this.props.loggedInUser.email}</h3>
        }
      </div>
    );
  }
}
