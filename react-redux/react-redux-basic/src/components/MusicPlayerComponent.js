import React, { Component } from 'react';
import './MusicPlayerStyle.css';

export default class MusicPlayerComponent extends Component {
  render() {
    return (
      <div>
        {
          this.props.activeSong &&
          <div className="footer">
            <div style={{ paddingLeft: 8, paddingRight: 8, backgroundColor: '#EFF1F2' }}>
              <div style={{ textAlign: 'center', padding: 4 }}>
                <strong style={{ fontSize: 12 }}>{this.props.activeSong.title} - {this.props.activeSong.artist}</strong>
              </div>

              <audio controls src={this.props.activeSong.url} autoPlay={true} preload="auto" ref="player"></audio>
            </div>
          </div>
        }
      </div>

    );
  }
}
