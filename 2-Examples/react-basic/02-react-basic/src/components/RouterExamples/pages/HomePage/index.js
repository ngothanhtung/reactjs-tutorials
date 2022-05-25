import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const songs = [
  {
    title: 'Nu Nhi Tinh',
    artist: 'Nhac Hoa',
    imageUrl: 'https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/b/8b8644dca0e408b13ba132f0a2fa1ec8_1493949470.jpg',
    url: 'http://data02.chiasenhac.com/downloads/1349/4/1348546-19ee3347/128/Nu%20Nhi%20Tinh%20Tay%20Luong%20Nu%20Quoc_%20-%20Various%20[128kbps_MP3].mp3'
  }
];

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => {
          // REACT DOM
          var element = document.getElementById('music-player');
          var player = ReactDOM.findDOMNode(element);
          player.src = songs[0].url;
          player.play();

          var elementSongName = document.getElementById('song-name');
          var name = ReactDOM.findDOMNode(elementSongName);
          name.innerHTML = songs[0].title + ' - ' + songs[0].artist;
        }}>
          {songs[0].title}</button>
      </div>
    );
  }
}
