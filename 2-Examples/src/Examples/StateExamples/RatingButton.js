import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function RatingButton() {
  const [stars, setStars] = React.useState(0);
  let array = [1, 2, 3, 4, 5];
  return (
    <div>
      {array.map((item) => {
        if (item <= stars) {
          return (
            <AiFillStar
              style={{ color: 'orange', cursor: 'pointer' }}
              onClick={() => {
                setStars(item);
              }}
            />
          );
        }
        return (
          <AiOutlineStar
            style={{ color: 'orange', cursor: 'pointer' }}
            onClick={() => {
              setStars(item);
            }}
          />
        );
      })}
    </div>
  );
}

export default RatingButton;
