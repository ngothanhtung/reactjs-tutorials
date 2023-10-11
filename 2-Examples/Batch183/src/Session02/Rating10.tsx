import React from 'react';
import { FaStarHalf } from 'react-icons/fa';
import styles from './Rating10.module.css';

type Props = {
  rate?: number;
};

export default function Rating10({ rate = 0 }: Props) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return (
          <span key={index} style={{ color: item <= rate ? 'orange' : 'gray' }}>
            <FaStarHalf className={item % 2 === 0 ? styles.starRight : styles.starLeft} />
          </span>
        );
      })}
    </div>
  );
}
