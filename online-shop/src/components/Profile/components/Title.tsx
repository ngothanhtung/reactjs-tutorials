import React from 'react';

type Props = {};

export default function Title({}: Props) {
  return (
    <div
      style={{
        zIndex: 1,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 780,
        height: '160px',
        backgroundColor: '#FF9C01',
        left: 220,
        paddingLeft: 140,
      }}
    >
      <span
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        KELLY WHITE
      </span>
      <span
        style={{
          fontSize: 24,
          color: '#FFFFFF',
        }}
      >
        ART DIRECTOR
      </span>
    </div>
  );
}
