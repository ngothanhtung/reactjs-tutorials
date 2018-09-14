import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Icon, Badge } from 'antd';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    }
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <span style={{ marginRight: 20, marginLeft: 20 }}>
        <Badge count={0} style={{ boxShadow: 'none' }}>
          <Icon type="clock-circle" style={{ fontSize: 18 }} />
          <span style={{ marginLeft: 8, fontWeight: '400' }} >{this.state.time}</span>
        </Badge>
      </span>
    )
  }
}



const mapStateToProps = (state) => ({
  // loggedInUser: state.loginReducer.loggedInUser,
  // score: state.quizReducer.score,
});

const mapDispatchToProps = (dispatch) => ({
  // loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);