import React, { Component } from 'react';
import Login from '../modules/quiz/containers/LoginContainer';
import Quiz from '../modules/quiz/containers/QuizContainer';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {/* <Login /> */}
        <Quiz />
      </div>
    );
  }
}
