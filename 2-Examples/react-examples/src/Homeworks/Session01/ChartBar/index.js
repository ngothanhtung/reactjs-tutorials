import React from 'react';
import styles from './styles.module.css';
import './styles.css';

function ChartBar({ text = 'TEXT', color1 = 'violet', color2 = 'pink', percentage = 50 }) {
  return (
    <div className={styles.container}>
      <div className={styles.column_left} style={{ backgroundColor: color1 }}>
        <span className={styles.text}> {text}</span>
      </div>
      <div className={styles.column_right}>
        <div className={`${styles.column_percentage_left} rectGrow`} style={{ backgroundColor: color2, width: `${percentage}%` }}>
          <span className={styles.text}>{percentage}%</span>
        </div>
        <div className={styles.column_percentage_right}></div>
      </div>
    </div>
  );
}

export default ChartBar;
