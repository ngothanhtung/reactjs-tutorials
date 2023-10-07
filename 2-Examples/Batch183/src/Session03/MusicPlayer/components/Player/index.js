import React from 'react';
import Slider from '../Slider';

const Player = React.forwardRef(({ selectedSong, onEnded, onPlaying }, ref) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  return (
    <div>
      {/* SLIDER */}
      <Slider
        max={selectedSong.duration}
        currentValue={currentTime}
        onChange={(value) => {
          ref.current.currentTime = value;
        }}
      />
      {/* AUDIO */}
      <audio
        style={{ display: 'none' }}
        controls
        src={selectedSong.audioUrl}
        autoPlay={selectedSong}
        preload='auto'
        ref={ref}
        onTimeUpdate={() => {
          setCurrentTime(ref.current.currentTime);
        }}
        onEnded={() => {
          if (onEnded && typeof onEnded === 'function') {
            onEnded();
            console.log('End and call next song');
          }
        }}
        onPlaying={() => {
          if (onPlaying && typeof onPlaying === 'function') {
            onPlaying();
          }
        }}
      />
    </div>
  );
});

export default Player;
