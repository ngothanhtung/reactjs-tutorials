import React from 'react';

type Props = {
  title?: string;
};

export default function Section({ title = 'TEXT' }: Props) {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 40,
          backgroundColor: '#FF9C01',
          paddingRight: 64,
          color: '#000000',
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 6,
        }}
      >
        {title}
      </div>
      <div style={{ height: 40, width: 60 }}></div>
    </div>
  );
}
