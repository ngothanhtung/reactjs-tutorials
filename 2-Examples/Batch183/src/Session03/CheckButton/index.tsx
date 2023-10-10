import classnames from 'classnames';
import React from 'react';
import styles from './CheckButton.module.css';

import { BsCheckLg } from 'react-icons/bs';

export default function CheckButton() {
  const [status, setStatus] = React.useState<'on' | 'off'>('on');

  const toggleSwitch = () => {
    setStatus(status === 'on' ? 'off' : 'on');
  };

  return (
    <div className={classnames(styles.container, status === 'on' ? styles.on : styles.off)} onClick={toggleSwitch}>
      <div className={classnames(styles.button, status === 'on' ? styles.on : styles.off)}>
        <BsCheckLg className={styles.icon} />
      </div>
    </div>
  );
}
