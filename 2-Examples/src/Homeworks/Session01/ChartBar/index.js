import React from 'react';
import './styles.css';
//! Lưu ý dùng cách này
import styles from './chartbar.module.css';

function ChartBar({ text = 'TEXT', color1 = 'violet', color2 = 'pink', percentage = 50 }) {
  return (
    <div className={styles.container}>
      <div className={styles.column_left} style={{ backgroundColor: color1 }}>
        <span className={styles.text}> {text}</span>
      </div>
      <div className={styles.column_right}>
        <div className={`${styles.column_percentage_left} rectGrow`} style={{ backgroundColor: color2, width: `${percentage}%` }}>
          <span className={styles.text}>{percentage}%</span>
          <span className={styles['text-big']}>BIG TEXT</span>
        </div>
        <div className={styles.column_percentage_right}></div>
      </div>
    </div>
  );
}

export default ChartBar;
