import React from 'react';
import styles from './equalizer.module.css';

function Equalizer({ playing }) {
  return (
    <div className={styles.container}>
      <i className={[styles.first_bar, playing ? styles.playing : styles.not_playing].join(' ')} />
      <i className={[styles.second_bar, playing ? styles.playing : styles.not_playing].join(' ')} />
      <i className={[styles.third_bar, playing ? styles.playing : styles.not_playing].join(' ')} />
      <i className={[styles.fourth_bar, playing ? styles.playing : styles.not_playing].join(' ')} />
    </div>
  );
}

export default Equalizer;
