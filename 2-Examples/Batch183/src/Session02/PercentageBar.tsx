import React from 'react';

type Props = {
  value?: number;
};

export default function PercentageBar({ value = 0 }: Props) {
  return (
    <div>
      <div style={{ width: 200, height: 10, backgroundColor: 'gray' }}>
        <div style={{ width: `${value}%`, height: 10, backgroundColor: 'orange' }}></div>
      </div>
    </div>
  );
}
