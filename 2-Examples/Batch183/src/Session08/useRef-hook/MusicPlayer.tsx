import React from 'react';

export default function MusicPlayer() {
  const refAudio = React.useRef<HTMLAudioElement>(null);

  return (
    <div>
      <audio style={{ display: 'none' }} controls src='/assets/Yeu-Mot-Nguoi-Vo-Tam-Bao-Anh.mp3' autoPlay={false} preload='auto' ref={refAudio} />
      <button
        className='btn btn-primary'
        onClick={() => {
          refAudio.current?.play();
        }}
      >
        Play
      </button>
      <button
        className='btn btn-info'
        onClick={() => {
          refAudio.current?.pause();
        }}
      >
        Pause
      </button>
      <button
        className='btn btn-warning'
        onClick={() => {
          refAudio.current?.pause();
          refAudio.current?.load();
        }}
      >
        Stop
      </button>
    </div>
  );
}
