import React from 'react';

import styles from './FillInTheBlank.module.css';

type Props = {
  questionContent: string;
  correctAnswer: string;
};

export default function FillInTheBlank({ questionContent, correctAnswer }: Props) {
  // user answer
  const [userAnswer, setUserAnswer] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleClick = () => {
    if (userAnswer.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase()) {
      alert('Correct');
    } else {
      alert('Wrong');
    }
  };

  // cắt bởi '___' hoặc '\r\n'
  const text = questionContent.split(/(___|\r\n)/g);

  return (
    <div className={styles.container}>
      <h3>Fill in the blank</h3>
      <hr />
      <div className={styles.question}>
        {text.map((item, index) => {
          if (item === '___') {
            return (
              <div key={index} style={{ display: 'inline-block', height: 30 }}>
                <input autoComplete='off' style={{ minWidth: 100, width: correctAnswer.length * 15, maxWidth: 400, fontSize: 20 }} onChange={handleChange} />
              </div>
            );
          }
          return <span key={index}>{item}</span>; // text
        })}
        h
      </div>

      <div>
        <button className={styles.submit} onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}
