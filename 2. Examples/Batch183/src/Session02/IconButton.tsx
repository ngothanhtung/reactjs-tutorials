import React from 'react';
import styles from './IconButton.module.css';

type Props = {
  text?: string; // optional
  iconLeft?: React.ReactNode; // optional
  iconRight?: React.ReactNode; // optional
};

export default function IconButton({ text = 'Buttton Text', iconLeft, iconRight }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonText}>
        {iconLeft && <div className={styles.leftIcon}>{iconLeft}</div>}
        <div style={{ flex: 1 }}>{text}</div>
        {iconRight && <div className={styles.rightIcon}>{iconRight}</div>}
      </div>
    </div>
  );
}
