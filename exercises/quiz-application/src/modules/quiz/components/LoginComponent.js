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
      <div style={{ display: 'flex' }}>
        {
          (!this.props.loggedInUser) &&
          <Button
            icon="login"
            loading={this.props.loading} type="primary" onClick={() => {
              this.props.loginAsync('tungnt@softech.vn', '123456789')
            }}>
            Login
        </Button>
        }

        {
          this.props.loggedInUser &&
          <div>
            <div style={{ width: 8 }}></div>
            <Button
              icon="logout"
              type="primary" onClick={() => {
                localStorage.clear();
                // reload page
                window.location.reload();
              }}>
              Logout
            </Button>
          </div>
        }
      </div>
    );
  }
}
