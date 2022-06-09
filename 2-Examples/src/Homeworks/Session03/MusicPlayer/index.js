import React from 'react';
import Controls from './components/Controls';
import Disc from './components/Disc';
import { songs } from './data';
import Songs from './components/Songs';
import Player from './components/Player';

function MusicPlayer() {
  const [selectedSong, setSelectedSong] = React.useState(songs[0]);
  const [playing, setPlaying] = React.useState(false);
  const refPlayer = React.useRef();

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
          refPlayer.current.pause();
          setPlaying(false);
        }}
      />

      {/* THANH DIEU KHIEN */}
      <Controls
        playing={playing}
        onClick={(actionName) => {
          switch (actionName) {
            case 'play':
              refPlayer.current.play();
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

      {/* DANH SACH BAI HAT */}
      <Songs
        songs={songs}
        playing={playing}
        selectedSong={selectedSong}
        onClick={(song) => {
          setSelectedSong(song);
          refPlayer.current.play();
        }}
      />
    </div>
  );
}

export default MusicPlayer;
