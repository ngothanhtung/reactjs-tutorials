import React from 'react';

type Props = {
  stars?: number;
};

export default function Rating({ stars = 0 }: Props) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span key={index} style={{ color: stars >= item ? 'orange' : 'gray' }}>
            ★
          </span>
        );
      })}
    </div>
  );
}
