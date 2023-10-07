import React from 'react';
import styles from './controls.module.css';
import { IoIosShuffle, IoIosSkipBackward, IoIosPlay, IoIosPause, IoIosSkipForward, IoIosRepeat } from 'react-icons/io';

type Props = {
  onClick?: (actionName: string) => void;
  currentIndex: number;
  max?: number;
  playing: boolean;
};

export default function Controls({ onClick, currentIndex = 0, max = 2, playing = false }: Props) {
  const handleOnClick = (actionName: string) => {
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
        <button disabled={currentIndex === 0} className={styles.button} onClick={() => handleOnClick('previous')}>
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
        <button disabled={currentIndex === max - 1} className={styles.button} onClick={() => handleOnClick('next')}>
          <IoIosSkipForward />
        </button>
        <button className={styles.button} onClick={() => handleOnClick('repeat')}>
          <IoIosRepeat />
        </button>
      </div>
    </div>
  );
}
