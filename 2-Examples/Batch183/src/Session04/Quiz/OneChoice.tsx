import React from 'react';
import styles from './OneChoice.module.css';

type Props = {
  questionContent?: string;
  answers?: string[];
  correctAnswer?: string;
};

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function OneChoice({ questionContent, answers, correctAnswer }: Props) {
  const handleClick = (text: string) => {
    if (text === correctAnswer) {
      alert('Correct');
    } else {
      alert('Wrong');
    }
  };
  return (
    <div>
      <h3>{questionContent}</h3>
      <div className={styles.answers}>
        {answers?.map((answer, index) => (
          <button
            key={index}
            onClick={() => {
              handleClick(answer);
            }}
          >
            {alphabet[index]}. {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
