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
      <Player ref={refPlayer} selectedSong={selectedSong} />

      {/* THANH DIEU KHIEN */}
      <Controls
        playing={playing}
        onClick={(actionName) => {
          switch (actionName) {
            case 'play':
              refPlayer.current.play();
              setPlaying(true);
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
          refPlayer.current.play();
          setSelectedSong(song);
          setPlaying(true);
        }}
      />
    </div>
  );
}

export default MusicPlayer;
