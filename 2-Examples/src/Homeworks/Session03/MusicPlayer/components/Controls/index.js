import React from 'react';
import styles from './controls.module.css';
import { IoIosShuffle, IoIosSkipBackward, IoIosPlay, IoIosPause, IoIosSkipForward, IoIosRepeat } from 'react-icons/io';

function Controls({ onClick, playing }) {
  const handleOnClick = (actionName) => {
    if (onClick && typeof onClick === 'function') {
      onClick(actionName);
    }
  };
  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginBottom: 24 }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around', maxWidth: 320, alignItems: 'center' }}>
        <button className={styles.button} onClick={() => handleOnClick('shuffle')}>
          <IoIosShuffle />
        </button>
        <button className={styles.button} onClick={() => handleOnClick('previous')}>
          <IoIosSkipBackward />
        </button>
        {!playing && (
          <button className={styles.button_play} onClick={() => handleOnClick('play')}>
            <IoIosPlay />
          </button>
        )}
        {playing && (
          <button className={[styles.button_play, styles.playing].join(' ')} onClick={() => handleOnClick('pause')}>
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
    </div>
  );
}

export default Controls;
