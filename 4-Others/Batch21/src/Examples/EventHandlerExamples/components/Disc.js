import React from 'react';

function Disc({ imageUrl, playing }) {
  return (
    <div>
      <div
        className={playing ? 'music_disc_rotation' : null}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
          width: 300,
          borderRadius: '50%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <div style={{ height: 60, width: 60, borderRadius: '50%', backgroundColor: 'white' }}></div>
      </div>
    </div>
  );
}

export default Disc;
