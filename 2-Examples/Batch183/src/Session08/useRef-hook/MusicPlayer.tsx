import React from 'react';

export default function MusicPlayer() {
  const ref = React.useRef<HTMLAudioElement>(null);

  return (
    <div>
      <audio style={{ display: 'none' }} controls src='/assets/Yeu-Mot-Nguoi-Vo-Tam-Bao-Anh.mp3' autoPlay={false} preload='auto' ref={ref} />
      <button
        className='btn btn-primary'
        onClick={() => {
          ref.current?.play();
        }}
      >
        Play
      </button>
      <button
        className='btn btn-info'
        onClick={() => {
          ref.current?.pause();
        }}
      >
        Pause
      </button>
      <button
        className='btn btn-warning'
        onClick={() => {
          ref.current?.pause();
          ref.current?.load();
        }}
      >
        Stop
      </button>
    </div>
  );
}
