import React from 'react';
import LoveButton from '../LoveButton';
import styles from './songs.module.css';

const Song = ({ song, onClick }) => {
  const handleOnClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div className={styles.song_container}>
      <div style={{ paddingRight: 12 }}>
        <img src={song.imageUrl} style={{ height: 60, width: 60 }} alt='' onClick={handleOnClick} />
      </div>
      <div className={styles.song_text_container} onClick={handleOnClick}>
        <div style={{ flex: 1, textAlign: 'left', fontSize: 12, fontWeight: '600' }}>{song.title}</div>
        <div style={{ flex: 1, textAlign: 'left', fontSize: 11 }}>{song.artist}</div>
      </div>
      <div className={styles.song_duration_container}>
        <span className={styles.song_duration_text}>{song.duration}</span>
        <LoveButton />
      </div>
    </div>
  );
};

function Songs({ songs }) {
  return (
    <div>
      {songs.map((item, index) => (
        <Song
          key={index}
          song={item}
          onClick={() => {
            // setActiveSong(item);
          }}
        />
      ))}
    </div>
  );
}

export default Songs;
