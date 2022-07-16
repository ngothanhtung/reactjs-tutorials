import React from 'react';
import Equalizer from '../Equalizer';
import LoveButton from '../LoveButton';
import styles from './songs.module.css';

// Danh sách các bài hát
function Songs({ songs, selectedSong, playing, onClick }) {
  const handleOnClick = (song) => () => {
    if (onClick && typeof onClick === 'function') {
      onClick(song);
    }
  };

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;

    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div>
      {songs.map((song, index) => {
        const isSelected = selectedSong.id === song.id;

        return (
          <div key={`song-${song.id}`} className={styles.song_container}>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 8, width: 40 }}>
              {isSelected && playing && <Equalizer />}
              {!isSelected && <div className={styles.number}>{index + 1}</div>}
            </div>
            <div style={{ paddingRight: 4 }}>
              <img src={song.imageUrl} style={{ height: 48, width: 48 }} alt='' onClick={handleOnClick(song)} />
            </div>

            <div className={styles.song_text_container} onClick={handleOnClick(song)}>
              <div style={{ fontSize: 14, color: isSelected ? '#4834d4' : 'inherit', fontWeight: '600' }}>{song.title}</div>
              <div style={{ fontSize: 12, marginTop: 2 }}>{song.artist}</div>
            </div>
            <div className={styles.song_duration_container}>
              <span className={styles.song_duration_text}>{formatDuration(song.duration)}</span>
              <LoveButton />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Songs;
