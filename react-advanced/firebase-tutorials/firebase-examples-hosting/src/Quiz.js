import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

const questions = [
  {
    questionText: 'Chien thang Dien Bien Phu vao nam nao?',
    options: [
      { text: '1945', isCorrect: false },
      { text: '1954', isCorrect: true },
      { text: '1968', isCorrect: false },
      { text: '1975', isCorrect: false }
    ]
  },
  {
    questionText: 'Tu nao sau day co nghia la con meo?',
    options: [
      { text: 'cat', isCorrect: true },
      { text: 'dog', isCorrect: false },
      { text: 'mouse', isCorrect: false },
      { text: 'pig', isCorrect: false }
    ]
  }
];

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      index: 0,
      gameStatus: 'running'
    };
  }

  render() {
    return (
      <div className="container" style={{ margin: 24 }}>
        {
          this.state.gameStatus === 'running' &&
          <div>
            <QuestionItem questionIndex={this.state.index + 1} data={this.state.questions[this.state.index]} onAnswer={(result) => {
              // LUU KET QUA:
              this.state.questions[this.state.index].userAnswer = { result: result };
              this.setState({ questions });

              if (this.state.index < this.state.questions.length - 1) {
                this.setState({ index: this.state.index + 1 });
              }
              else {
                this.setState({ gameStatus: 'completed' });
              }
            }} />
          </div>

        }
        {
          this.state.gameStatus === 'completed' &&
          <div>
            <h3>Result:</h3>
            <hr />
            {
              this.state.questions.map((item, index) => (
                <QuestionItem key={index} questionIndex={index + 1} data={item} />
              ))
            }
          </div>

        }
      </div>
    );
  }
}

export default Quiz;
