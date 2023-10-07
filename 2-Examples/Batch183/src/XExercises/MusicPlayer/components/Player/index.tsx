import React from 'react';
import Slider from '../Slider';

type Props = {
  selectedSong: any;
  onEnded?: () => void;
  onPlaying?: () => void;
};

const Player = React.forwardRef<HTMLAudioElement, Props>(({ selectedSong, onEnded, onPlaying }: Props, ref) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  return (
    <div>
      {/* SLIDER */}
      <Slider
        max={selectedSong.duration}
        currentValue={currentTime}
        onChange={(value) => {
          if (typeof ref !== 'function' && ref && ref.current) {
            ref.current.currentTime = Number(value);
          }
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
          if (typeof ref !== 'function' && ref && ref.current) {
            setCurrentTime(ref.current.currentTime);
          }
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
