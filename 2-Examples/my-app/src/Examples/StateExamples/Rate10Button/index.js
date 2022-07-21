import React from 'react';
import { FaStarHalf, FaRegStarHalf } from 'react-icons/fa';

function Rate10Button() {
  // let star = 3;
  const [star, setStar] = React.useState(0);
  let stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {stars.map((item, index) => {
        let Star = FaStarHalf;
        if (index + 1 > star) {
          Star = FaRegStarHalf;
        }

        return (
          <Star
            style={{ transform: 'scaleX(-1)' }}
            size={32}
            onClick={() => {
              if (star === index + 1) {
                setStar(0);
              } else {
                setStar(index + 1);
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default Rate10Button;
