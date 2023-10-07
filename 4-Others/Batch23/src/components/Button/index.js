import React from 'react';
// Cách 1:
// import './styles.css';

// Cách 2: Phổ biến cho components
import styles from './Button.module.css';

function Button() {
  return (
    <div className={styles.button}>
      <div className={styles.text}>Get stated</div>
      <div className={styles.icon}>
        <img src='./images/arrow.png' width='17' height='16' alt='' />
      </div>
    </div>
  );
}

export default Button;
