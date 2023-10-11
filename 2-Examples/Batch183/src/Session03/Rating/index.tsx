import React from 'react';

type Props = {
  stars?: number;
};

export default function Rating({ stars = 0 }: Props) {
  const [rating, setRating] = React.useState(stars);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span
            key={index}
            style={{ cursor: 'pointer', color: rating >= item ? 'orange' : 'gray' }}
            onClick={() => {
              setRating(item);
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
