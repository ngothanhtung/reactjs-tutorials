import React from 'react';
import styles from './MusicPlayer.module.css';
import Equalizer from './components/Equalizer';

export default function Song({ song, currentSong, onClick }) {
  return (
    <div
      className={styles.songContainer}
      onClick={() => {
        if (onClick && typeof onClick === 'function') {
          onClick();
        }
      }}
    >
      <div style={{ minWidth: 40 }}>{song.id === currentSong?.id && <Equalizer />}</div>
      <div style={{ flex: 1 }}>
        <div className={styles.songTitle}>{song.title}</div>
      </div>

      <div className={styles.songArtist}>{song.artist}</div>
      <div className={styles.songDuration}>{song.duration}</div>
    </div>
  );
}
