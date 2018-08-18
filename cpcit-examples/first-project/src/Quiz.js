import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
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
      ]
    };
  }

  render() {
    return (
      <div>
        {
          this.state.questions.map((item, index) => (
            <QuestionItem key={index} data={item} />
          ))
        }

      </div>
    );
  }
}

export default Quiz;
