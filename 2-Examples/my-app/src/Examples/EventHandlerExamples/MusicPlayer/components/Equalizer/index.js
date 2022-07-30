import React from 'react';
import styles from './equalizer.module.css';

function Equalizer() {
  return (
    <div className={styles.container}>
      <i className={styles.first_bar} />
      <i className={styles.second_bar} />
      <i className={styles.third_bar} />
      <i className={styles.fourth_bar} />
    </div>
  );
}

export default Equalizer;
