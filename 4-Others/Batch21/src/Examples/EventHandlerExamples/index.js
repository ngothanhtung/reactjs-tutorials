import React from 'react';
import AudioPlayer from './components/AudioPlayer';
import Controls from './components/Controls';
import Disc from './components/Disc';
import Slider from './components/Slider';

function EventHandlerExamples() {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const refPlayer = React.useRef();
  return (
    <div>
      <Disc imageUrl='assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.jpeg' playing={playing} />

      <Slider
        max={195}
        currentValue={currentTime}
        onChange={(value) => {
          // console.log('PARENT (Slider)', value);
          refPlayer.current.currentTime = value;
        }}
      />

      <Controls
        onClick={(actionName) => {
          // console.log('PARENT (Controls)', actionName);
          if (actionName === 'play') {
            refPlayer?.current?.play();
            setPlaying(true);
          } else if (actionName === 'pause') {
            refPlayer?.current?.pause();
            setPlaying(false);
          }
        }}
      />

      <div style={{ display: 'none' }}>
        <audio
          controls
          src='assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.mp3'
          ref={refPlayer}
          onTimeUpdate={(e) => {
            setCurrentTime(refPlayer?.current?.currentTime);
            // console.log(refPlayer?.current?.currentTime);
          }}
          onEnded={() => {
            // next song
          }}
        />
      </div>
    </div>
  );
}

export default EventHandlerExamples;
