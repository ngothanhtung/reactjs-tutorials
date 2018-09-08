import React, { Component } from 'react';


export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {
          this.props.loading &&
          <h1>Loading ...</h1>
        }
        <button onClick={() => {
          this.props.loginAsync('tungnt@softech.vn', '123456789');
        }}>
          LOGIN
        </button>
      </div>
    );
  }
}
