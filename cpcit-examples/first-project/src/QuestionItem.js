import React, { Component } from 'react';

// {
//   questionText: 'Chien thang Dien Bien Phu vao nam nao?',
//     options: [
//       { text: '1945', isCorrect: false },
//       { text: '1954', isCorrect: true },
//       { text: '1968', isCorrect: false },
//       { text: '1975', isCorrect: false }
//     ]
// }

export default class QuestionItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.data.questionText}</h3>
        {this.props.data.options.map((item, index) => (
          <button key={index} onClick={() => {
            // Code here
            console.log(item);
            if (item.isCorrect) {
              alert('Correct');
              // POST TO SERVER
            }
          }}>
            {item.text}
          </button>
        ))}
      </div>
    );
  }
}