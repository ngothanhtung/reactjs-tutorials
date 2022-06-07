import React from 'react';
import styles from './controls.module.css';
import { IoIosShuffle, IoIosSkipBackward, IoIosPlay, IoIosPause, IoIosSkipForward, IoIosRepeat } from 'react-icons/io';

function Controls({ onClick }) {
  const [status, setStatus] = React.useState('pause');

  const handleOnClick = (actionName) => {
    if (actionName === 'play' || actionName === 'pause') {
      setStatus(actionName);
    }

    if (onClick && typeof onClick === 'function') {
      onClick(actionName);
    }
  };
  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
      <button className={styles.button} onClick={() => handleOnClick('shuffle')}>
        <IoIosShuffle />
      </button>
      <button className={styles.button} onClick={() => handleOnClick('previous')}>
        <IoIosSkipBackward />
      </button>
      {status === 'pause' && (
        <button className={styles.button_play} onClick={() => handleOnClick('play')}>
          <IoIosPlay />
        </button>
      )}
      {status === 'play' && (
        <button className={styles.button_play} onClick={() => handleOnClick('pause')}>
          <IoIosPause />
        </button>
      )}
      <button className={styles.button} onClick={() => handleOnClick('next')}>
        <IoIosSkipForward />
      </button>
      <button className={styles.button} onClick={() => handleOnClick('repeat')}>
        <IoIosRepeat />
      </button>
    </div>
  );
}

export default Controls;
