import React from 'react';

type Props = {
  year?: string;
  title?: string;
};

export default function Time({ year = '2010-2014', title = 'TEXT' }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        marginTop: 12,
        marginBottom: 12,
        alignItems: 'center',
      }}
    >
      <div>
        <div style={{ height: 32, width: 32, backgroundColor: '#FF9C01', marginRight: 12 }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 600 }}>{year}</span>
        <div style={{ height: 4 }} />
        <span style={{ fontWeight: 600 }}>{title}</span>
      </div>
    </div>
  );
}
