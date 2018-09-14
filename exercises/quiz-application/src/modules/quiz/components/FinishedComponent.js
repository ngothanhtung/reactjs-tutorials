import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rate, Alert } from 'antd';
class FinishedComponent extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Alert
          message="Completed"
          description={"Your score: " + this.props.score}
          type="success"
          showIcon
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.loginReducer.loggedInUser,
  score: state.quizReducer.score,
});

const mapDispatchToProps = (dispatch) => ({
  // loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FinishedComponent);
