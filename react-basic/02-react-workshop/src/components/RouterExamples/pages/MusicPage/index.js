import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const songs = [
  {
    title: 'Nu Nhi Tinh',
    artist: 'Le Sang',
    imageUrl: 'https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/b/8b8644dca0e408b13ba132f0a2fa1ec8_1493949470.jpg',
    url: 'http://data02.chiasenhac.com/downloads/1349/4/1348546-19ee3347/128/Nu%20Nhi%20Tinh%20Tay%20Luong%20Nu%20Quoc_%20-%20Various%20[128kbps_MP3].mp3'
  },
  {
    title: 'Dap Mo Cuoc Tinh',
    artist: 'Quang Lap',
    imageUrl: 'https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/b/8b8644dca0e408b13ba132f0a2fa1ec8_1493949470.jpg',
    url: 'http://data00.chiasenhac.com/downloads/1814/4/1813372-261f8b12/128/Dap%20Mo%20Cuoc%20Tinh%20-%20Quang%20Lap%20[128kbps_MP3].mp3'
  },
];

export default class MusicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: songs[0],
      play: true,
    };
  }

  handleClick(props) {
    // REACT DOM
    var elementPlayer = document.getElementById('music-player');
    var player = ReactDOM.findDOMNode(elementPlayer);
    player.src = props.song.url;
    player.play();

    var elementSongName = document.getElementById('song-name');
    var name = ReactDOM.findDOMNode(elementSongName);
    name.innerHTML = props.song.title + ' - ' + props.song.artist;
  }

  SongItem = (props) => {
    return (
      <div>
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ paddingRight: 12 }}>
            <img src={props.song.imageUrl} style={{ height: 60, width: 60 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: '700' }}>{props.song.title}</div>
            <div style={{ fontSize: 11 }}>{props.song.artist}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => {
              // REACT DOM
              var elementPlayer = document.getElementById('music-player');
              var player = ReactDOM.findDOMNode(elementPlayer);
              player.src = props.song.url;
              player.play();

              var elementSongName = document.getElementById('song-name');
              var name = ReactDOM.findDOMNode(elementSongName);
              name.innerHTML = props.song.title + ' - ' + props.song.artist;
            }}>
              <i className="fas fa-play"></i>
            </span>
          </div>
        </div>
        <hr />
      </div>
    )
  }

  render() {
    const { active } = this.state;

    return (
      <div style={{ marginBottom: 160 }}>
        {
          songs.map((item, index) => (
            <this.SongItem key={index} song={item} />
          ))
        }
      </div>
    );
  }
}
