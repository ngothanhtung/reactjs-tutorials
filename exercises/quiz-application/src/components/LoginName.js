import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../modules/quiz/actions/loginActions';
import { Avatar } from 'antd';

const avatarUrl = 'https://edusynch.s3.amazonaws.com/uploads/student/avatar/102514/thumb_23172429_10156831208144676_2528946045023983681_n.jpg';

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
            <Avatar size="small" src={avatarUrl} />
            <div style={{ width: 4 }}></div>
            <strong>Welcome {this.props.loggedInUser.fullName}!</strong>
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