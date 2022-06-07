import styles from './music.module.css';
import React from 'react';
import LoveButton from './components/LoveButton';

import Controls from './components/Controls';
import Disc from './components/Disc';
import Slider from './components/Slider';
import { songs } from './data';
import Songs from './components/Songs';

function MusicPlayer() {
  const [activeSong, setActiveSong] = React.useState(songs[0]);
  const [playing, setPlaying] = React.useState(songs[0]);
  const [currentTime, setCurrentTime] = React.useState(0);
  const refPlayer = React.useRef();

  const updateCurrentTime = (value) => {
    refPlayer.current.currentTime = value;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Disc song={activeSong} playing={playing} />

      <Slider
        max={activeSong.duration}
        currentValue={currentTime}
        onChange={(value) => {
          updateCurrentTime(value);
        }}
      />
      <Controls
        onClick={(actionName) => {
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

      <Songs songs={songs} />

      <audio
        style={{ display: 'none' }}
        controls
        src={activeSong.audioUrl}
        autoPlay={playing}
        preload='auto'
        ref={refPlayer}
        onTimeUpdate={(e) => {
          setCurrentTime(refPlayer.current.currentTime);
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
