// import Basic from './Basic';
// import MusicPlayer from './MusicPlayer';
import Basic from './Basic';
import ForwardRef from './ForwardRef';
import React from 'react';
import MusicPlayer from './MusicPlayer';

export default function UseRefHookExamples() {
  const refPlayer = React.useRef<HTMLAudioElement>(null);
  return (
    <div>
      {/* <Basic /> */}
      {/* <MusicPlayer /> */}
      <ForwardRef ref={refPlayer} source='/assets/Yeu-Mot-Nguoi-Vo-Tam-Bao-Anh.mp3' />
      <button
        onClick={() => {
          refPlayer.current?.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          refPlayer.current?.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
}
