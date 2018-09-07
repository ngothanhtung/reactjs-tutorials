import React, { Component } from 'react';
// const question =
// {
//   questionText: 'Chien thang Dien Bien Phu vao nam nao?',
//   options: [
//     { text: '1945', isCorrect: false },
//     { text: '1954', isCorrect: true },
//     { text: '1968', isCorrect: false },
//     { text: '1975', isCorrect: false }
//   ]
// }

// const { options } = question;

export default class QuestionItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginBottom: 30, }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <h3>{this.props.questionIndex}.&nbsp;</h3>
          {
            this.props.data.userAnswer && this.props.data.userAnswer.result &&
            <h3><i className="fas fa-check" style={{ color: 'green' }}></i>&nbsp;&nbsp;</h3>
          }
          {
            this.props.data.userAnswer && this.props.data.userAnswer.result === false &&
            <h3><i className="fas fa-times" style={{ color: 'red' }}></i>&nbsp;&nbsp;</h3>
          }
          <h3>{this.props.data.questionText}</h3>
        </div>
        {
          this.props.data.options.map((item, index) => {
            return (
              <button
                disabled={this.props.data.userAnswer}
                style={{ textAlign: "left" }}
                className="btn btn-lg btn-block btn-outline-primary"
                key={index}
                onClick={() => {
                  // Callback
                  console.log(item);
                  this.props.onAnswer(item.isCorrect);
                }}
              >
                {item.text}
              </button>
            )
          })
        }
      </div>
    );
  }
}