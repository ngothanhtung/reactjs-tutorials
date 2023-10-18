import React from 'react';

type Props = {
  count: number;
};

export default function NewProps({ count = 0 }: Props) {
  console.log('🦊 NewProps: RENDER');
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}
