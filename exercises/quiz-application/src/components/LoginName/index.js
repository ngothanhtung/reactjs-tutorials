import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../../modules/quiz/actions/loginActions';
import { Avatar, Button, Dropdown, Menu, Icon } from 'antd';

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
    const menu = (
      <Menu className="menu" selectedKeys={[]} onClick={(e) => {
        console.log(e.key);
        if (e.key === 'logout') {
          localStorage.clear();
          window.location.href = '/';
        }
      }}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          Account center
          {/* <FormattedMessage id="menu.account.center" defaultMessage="account center" /> */}
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          Account settings
          {/* <FormattedMessage id="menu.account.settings" defaultMessage="account settings" /> */}
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />
          Trigger Error
          {/* <FormattedMessage id="menu.account.trigger" defaultMessage="Trigger Error" /> */}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          Log out
        </Menu.Item>
      </Menu>
    );

    return (
      <span style={{ marginBottom: 8 }}>
        {
          this.props.loggedInUser &&
          <Dropdown overlay={menu}>
            <span style={{ marginRight: 20, marginLeft: 20 }}>
              <Avatar
                size="small"
                style={{ verticalAlign: 'middle', marginRight: 4 }}
                src={'https://avatars.slack-edge.com/2017-03-14/153965723219_6d4c12ff50d628f2d664_192.jpg'}
                alt="avatar"
              />
              <span style={{ verticalAlign: 'middle' }}>{this.props.loggedInUser.fullName}</span>
            </span>
          </Dropdown>
        }
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.loginReducer.loggedInUser,
  score: state.quizReducer.score,
});

const mapDispatchToProps = (dispatch) => ({
  loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginName);