import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: 'login'
    }
  }
  render() {
    return (
      <div>
        {
          this.state.formName === 'login' &&
          <div style={{ height: 400, padding: 4, backgroundColor: 'red' }}>
            <h3>LOGIN</h3>
            <button>LOGIN</button>
            <button onClick={() => {
              this.setState({ formName: 'register' });
            }}>REGISTER</button>
          </div>
        }

        {
          this.state.formName === 'register' &&
          <div style={{ height: 400, padding: 4, backgroundColor: 'green' }}>
            <h3>REGISTER</h3>
          </div>
        }

      </div>
    );
  }
}

export default LoginForm;