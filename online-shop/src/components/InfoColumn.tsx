import React from 'react';
import styles from './InfoColumn.module.css';

type Props = {
  title?: string;
  percent?: number;
  mainColor?: string;
  subColor?: string;
};

export default function InfoColumn({ title = 'TEXT', percent = 100, mainColor = '#E44D4C', subColor = '#F75354' }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn} style={{ backgroundColor: mainColor }}>
        <span>{title}</span>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.percent} style={{ backgroundColor: subColor, width: `${percent}%` }}>
          {percent}%
        </div>
        <div></div>
      </div>
    </div>
  );
}
