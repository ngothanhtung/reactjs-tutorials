import React, { Component } from 'react';
import Quiz from '../modules/quiz/containers/QuizContainer';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Quiz />
      </div>
    );
  }
}
