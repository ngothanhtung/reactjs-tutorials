import React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import styles from './MusicPlayer.module.css';

const songs = [
  {
    id: 1,
    title: 'Sống xa anh chẳng dễ dàng',
    artist: 'Bảo Anh',
    imageUrl: 'assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.jpeg',
    audioUrl: 'assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.mp3',
    duration: 256,
  },
  {
    id: 2,
    title: 'Yêu một người vô tâm',
    artist: 'Bảo Anh',
    imageUrl: 'assets/Yeu-Mot-Nguoi-Vo-Tam-Bao-Anh.jpeg',
    audioUrl: 'assets/Yeu-Mot-Nguoi-Vo-Tam-Bao-Anh.mp3',
    duration: 309,
  },
];

export default function MusicPlayer() {
  const [songIndex, setSongIndex] = React.useState(0);
  const [status, setStatus] = React.useState('stop');
  const [currentValue, setCurrentValue] = React.useState(0);
  const refPlayer = React.useRef(null);

  const play = () => {
    if (status !== 'play') {
      refPlayer.current?.play();
      setStatus('play');
    } else {
      refPlayer.current?.pause();
      setStatus('pause');
    }
  };

  return (
    <div>
      <div className={styles.disc_container}>
        <div
          className={[styles.disc, status === 'play' ? styles.disc_rotation : ''].join(' ')}
          style={{
            backgroundImage: `url(${songs[songIndex].imageUrl})`,
          }}
        >
          <div className={styles.disc_center}></div>
        </div>
      </div>
      <audio
        style={{ display: 'none' }}
        ref={refPlayer}
        src='/assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.mp3'
        controls
        onTimeUpdate={(e) => {
          // console.log(e.target.currentTime);
          setCurrentValue(e.target.currentTime);
        }}
      />
      <input
        step={1}
        type='range'
        min={0}
        max={256}
        value={currentValue.toFixed(0)}
        className={styles.slider}
        id='myRange'
        onInput={(e) => {
          // console.log(e.target.value);
          setCurrentValue(parseInt(e.target.value));
          refPlayer.current.currentTime = parseInt(e.target.value);
        }}
      />
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={play}>
          {status !== 'play' ? <FaPlay /> : <FaPause />}
        </button>
      </div>

      <div>
        {songs.map((song, index) => {
          return (
            <div key={`song-${index}`}>
              <p>{song.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
