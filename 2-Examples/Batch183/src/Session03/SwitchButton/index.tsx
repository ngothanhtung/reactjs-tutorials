import classnames from 'classnames';
import React from 'react';
import styles from './SwitchButton.module.css';

export default function SwitchButton() {
  const [status, setStatus] = React.useState<'on' | 'off'>('on');

  const toggleSwitch = () => {
    setStatus(status === 'on' ? 'off' : 'on');
  };

  return (
    <div className={classnames(styles.container, status === 'on' ? styles.on : styles.off)} onClick={toggleSwitch}>
      <div className={classnames(styles.button, status === 'on' ? styles.on : styles.off)}></div>
    </div>
  );
}
