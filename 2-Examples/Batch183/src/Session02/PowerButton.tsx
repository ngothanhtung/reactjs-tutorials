import React from 'react';
import styles from './PowerButton.module.css';
type Props = {
  status?: 'on' | 'off';
};

/*
export default function PowerButton({ status = 'on' }: Props) {
  let style = styles.onButton;
  if (status === 'off') {
    style = styles.offButton;
  }

  return (
    <div className={styles.container}>
      <div className={style}></div>
    </div>
  );
}
*/

export default function PowerButton({ status = 'on' }: Props) {
  return (
    <div className={styles.container}>
      <div className={status === 'on' ? styles.onButton : styles.offButton}></div>
    </div>
  );
}

/*
export default function PowerButton({ status = 'on' }: Props) {
  if (status === 'on') {
    return (
      <div className={styles.container}>
        <div className={styles.onButton}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.offButton}></div>
    </div>
  );
}
*/
