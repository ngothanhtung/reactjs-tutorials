import React from 'react';
import styles from './Profile.module.css';
import Avatar from './components/Avatar';
import Title from './components/Title';
import Education from './components/Education';
import Experience from './components/Experrience';

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.titleContainer}>
          <Avatar />
          <Title />
        </div>
        <div className={styles.description}>
          <Education />
          <Experience />
        </div>
      </div>
      <div className={styles.rightColumn}></div>
    </div>
  );
}
