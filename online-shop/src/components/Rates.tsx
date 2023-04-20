import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
type Props = {};

export default function Rates({}: Props) {
  // let star = 5;
  const [star, setStar] = React.useState(0);
  let stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {stars.map((s) => {
        if (s <= star) {
          return (
            <AiFillStar
              onClick={() => {
                setStar(s);
              }}
            />
          );
        } else {
          return (
            <AiOutlineStar
              onClick={() => {
                setStar(s);
              }}
            />
          );
        }
      })}
    </div>
  );
}
