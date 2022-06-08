import React from 'react';
import Slider from '../Slider';

const Player = React.forwardRef(({ selectedSong, onEnded }, ref) => {
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
        autoPlay={true}
        preload='auto'
        ref={ref}
        onTimeUpdate={(e) => {
          setCurrentTime(ref.current.currentTime);
        }}
        onEnded={(e) => {
          if (onEnded && typeof onEnded === 'function') {
            console.log('End and call next song');
          }
        }}
      />
    </div>
  );
});

export default Player;
