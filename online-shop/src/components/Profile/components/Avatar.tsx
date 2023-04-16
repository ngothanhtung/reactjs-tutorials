import React from 'react';

type Props = {};

export default function Avatar({}: Props) {
  return (
    <img
      src='/images/avatar.jpeg'
      style={{
        zIndex: 2,
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        border: '12px solid #1F2E25',
      }}
    />
  );
}
