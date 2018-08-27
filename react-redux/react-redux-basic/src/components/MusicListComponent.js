import React, { Component } from 'react';
import './MusicPlayerStyle.css';

export default class MusicListComponent extends Component {
  render() {
    return (
      <div>
        {
          this.props.songs.map((item, index) => (
            <div key={index}>
              <button style={{ textAlign: 'left', marginBottom: 4 }} className="btn btn-primary btn-block" onClick={() => {
                this.props.play(item);
              }}>
                {item.title}
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}
