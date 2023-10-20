import React from 'react';

import styles from './OneChoice.module.css';

type Props = {
  questionContent?: string;
  answers?: string[];
  correctAnswer?: string;
};

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function OneChoice({ questionContent, answers, correctAnswer }: Props) {
  // user answer
  const [userAnswer, setUserAnswer] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUserAnswer(event.target.value);
  };

  const handleClick = () => {
    if (userAnswer === correctAnswer) {
      alert('Correct');
    } else {
      alert('Wrong');
    }
  };
  return (
    <div className={styles.container}>
      <h3>{questionContent}</h3>
      <hr />
      <div className={styles.answers}>
        {answers?.map((answer, index) => (
          <div className={styles.answer}>
            <input type='radio' radioGroup='answer' name={questionContent} value={answer} autoComplete='off' onChange={handleChange} />
            <strong>
              {alphabet[index]}. {answer}
            </strong>
          </div>
        ))}
      </div>
      <div>
        <button
          className={styles.submit}
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
