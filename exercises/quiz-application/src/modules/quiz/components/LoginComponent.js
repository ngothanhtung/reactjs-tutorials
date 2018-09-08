import React, { Component } from 'react';
import Button from 'antd/lib/button';

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
        <Button type="primary" onClick={() => {
          this.props.loginAsync('tungnt@softech.vn', '123456789');
        }}>
          LOGIN
        </Button>
      </div>
    );
  }
}
