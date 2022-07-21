import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function RateButton() {
  // let star = 3;
  const [star, setStar] = React.useState(0);
  let stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((item, index) => {
        let Star = AiFillStar;
        if (index + 1 > star) {
          Star = AiOutlineStar;
        }

        return (
          <Star
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

export default RateButton;
