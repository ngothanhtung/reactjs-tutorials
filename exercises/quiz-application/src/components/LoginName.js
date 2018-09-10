import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../modules/quiz/actions/loginActions';
import { Avatar, Button } from 'antd';

class LoginName extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const { email, password } = JSON.parse(loggedInUser);
      this.props.loginAsync(email, password);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.loggedInUser &&
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size="small" src={this.props.loggedInUser.avatarUrl} />
            <div style={{ width: 4 }}></div>
            <strong>Welcome {this.props.loggedInUser.fullName}!</strong>
            <div style={{ width: 6 }}></div>
            <Button size={"small"} onClick={() => {
              localStorage.clear();
              window.location.href = '/';
            }}>Logout</Button>
          </div>

        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.loginReducer.loggedInUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginName);