import React from 'react';
import styles from './Title.module.css';

type Props = {};

export default function Title({}: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>KELLY WHITE</span>
      <span className={styles.subTitle}>ART DIRECTOR</span>
    </div>
  );
}
