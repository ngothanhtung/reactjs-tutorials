import styles from './music.module.css';
import React from 'react';
import LoveButton from './components/LoveButton';

import { songs } from './data';
import { node } from 'prop-types';
import Controls from './components/Controls';
import Disc from './components/Disc';
import Slider from './components/Slider';

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

function MusicPlayer() {
  const [activeSong, setActiveSong] = React.useState(songs[0]);
  const [playing, setPlaying] = React.useState(songs[0]);
  const refPlayer = React.useRef();

  const updateCurrentTime = (value) => {
    refPlayer.current.currentTime = value;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Disc song={activeSong} playing={playing} />

      <Slider
        max={activeSong.duration}
        onChange={(value) => {
          console.log(value);
          updateCurrentTime(value);
        }}
      />
      <Controls
        onClick={(actionName) => {
          console.log(actionName);
          switch (actionName) {
            case 'play':
              refPlayer.current.play();
              setPlaying(true);
              break;
            case 'pause':
              refPlayer.current.pause();
              setPlaying(false);
              break;
            default:
              break;
          }
        }}
      />

      {songs.map((item, index) => (
        <Song
          key={index}
          song={item}
          onClick={() => {
            setActiveSong(item);
          }}
        />
      ))}

      <audio
        style={{ display: 'none' }}
        controls
        src={activeSong.audioUrl}
        autoPlay={false}
        preload='auto'
        ref={refPlayer}
        onTimeUpdate={(e) => {
          console.log(e);
        }}
        onEnded={(e) => {
          console.log('call next function');
        }}
      />
    </div>
  );
}

export default MusicPlayer;
