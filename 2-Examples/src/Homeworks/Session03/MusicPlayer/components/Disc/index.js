import React from 'react';
import styles from './disc.module.css';

function Disc({ song, playing }) {
  const className = [styles.disc, playing ? styles.disc_rotation : null].join(' ');

  return (
    <div className={styles.disc_container}>
      <div className={className} style={{ backgroundImage: `url(${song.imageUrl})` }}>
        <div className={styles.disc_center}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', paddingTop: 24 }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: '#2c3e50' }}>{song.title}</span>
        <span style={{ fontWeight: 500, fontSize: 15, color: '#b2bec3' }}>{song.artist}</span>
      </div>
    </div>
  );
}

export default Disc;
