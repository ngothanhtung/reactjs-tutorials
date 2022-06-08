import React from 'react';
import Equalizer from '../Equalizer';
import LoveButton from '../LoveButton';
import styles from './songs.module.css';

// Một bài hát
const Song = ({ song, playing, onClick }) => {
  const handleOnClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div className={styles.song_container}>
      <div style={{ paddingRight: 4 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
        <Equalizer playing={playing} />
      </div>
    </div>
  );
};

// Danh sách các bài hát
function Songs({ songs, selectedSong, playing, onClick }) {
  return (
    <div>
      {songs.map((item, index) => (
        <Song
          playing={selectedSong.id === item.id && playing}
          key={index}
          song={item}
          onClick={() => {
            if (onClick && typeof onClick === 'function') {
              onClick(item);
            }
          }}
        />
      ))}
    </div>
  );
}

export default Songs;
