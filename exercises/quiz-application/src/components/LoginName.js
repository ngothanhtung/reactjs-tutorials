import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../modules/quiz/actions/loginActions';

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
          <span>Welcome {this.props.loggedInUser.email}!</span>
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