import React from 'react';
import ReactDOM from 'react-dom';
import LoveButton from './components/LoveButton';

import { songs } from './data';

const Song = ({ song }) => {
  return (
    <div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ paddingRight: 12 }}>
          <img src={song.imageUrl} style={{ height: 60, width: 60 }} alt='' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: '700' }}>{song.title}</div>
          <div style={{ fontSize: 11 }}>{song.artist}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              // this.setState({ active: song });

              // REACT DOM
              var elementPlayer = document.getElementById('music-player');
              var player = ReactDOM.findDOMNode(elementPlayer);
              player.src = song.audioUrl;
              player.play();

              var elementSongName = document.getElementById('song-name');
              var name = ReactDOM.findDOMNode(elementSongName);
              name.innerHTML = song.title + ' - ' + song.artist;
            }}
          >
            <i className='fas fa-play'></i>
          </span>
        </div>
        <LoveButton />
      </div>
      <hr />
    </div>
  );
};

function MusicPlayer() {
  const [activeSong, setActiveSong] = React.useState(songs[0]);
  const [playing, setPlaying] = React.useState(true);
  const refPlayer = React.useRef(null);
  return (
    <div>
      {songs.map((item, index) => (
        <Song key={index} song={item} />
      ))}
      <div className='footer'>
        <div style={{ paddingLeft: 8, paddingRight: 8, backgroundColor: '#EFF1F2' }}>
          <div style={{ textAlign: 'center', padding: 4 }}>
            <strong id='song-name' style={{ fontSize: 12 }}>
              {activeSong.title} - {activeSong.artist}
            </strong>
          </div>
          <audio id='music-player' controls src={activeSong.audioUrl} autoPlay={playing} preload='auto' ref={refPlayer}></audio>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
