import React from 'react';
import Controls from './components/Controls';
import Disc from './components/Disc';
import { songs } from './data';
import Songs from './components/Songs';
import Player from './components/Player';

function MusicPlayer({ max = 2 }) {
  const [selectedSongIndex, setSelectedSongIndex] = React.useState(0);

  const [playing, setPlaying] = React.useState(false);
  const refPlayer = React.useRef<HTMLAudioElement>(null);

  const selectedSong = songs[selectedSongIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 24 }}>
      {/* DIA NHAC */}
      <Disc song={selectedSong} playing={playing} />

      {/* HTML AUDIO */}
      <Player
        ref={refPlayer}
        selectedSong={selectedSong}
        onPlaying={() => {
          setPlaying(true);
        }}
        onEnded={() => {
          refPlayer.current?.pause();
          setPlaying(false);
        }}
      />

      {/* THANH DIEU KHIEN */}
      <Controls
        playing={playing}
        currentIndex={selectedSongIndex}
        max={max}
        onClick={(actionName) => {
          switch (actionName) {
            case 'play':
              refPlayer.current?.play();
              break;
            case 'pause':
              refPlayer.current?.pause();
              setPlaying(false);
              break;
            case 'previous':
              setSelectedSongIndex((previousIndex) => previousIndex - 1);
              break;
            case 'next':
              setSelectedSongIndex((previousIndex) => previousIndex + 1);
              break;
            default:
              break;
          }
        }}
      />

      {/* DANH SACH BAI HAT */}
      <Songs
        songs={songs}
        playing={playing}
        selectedSong={selectedSong}
        onClick={(song) => {
          const i = songs.findIndex((s) => s.id === song.id);
          setSelectedSongIndex(i);
          // setSelectedSong(song);
          refPlayer.current?.play();
        }}
      />
    </div>
  );
}

export default MusicPlayer;
