import React from 'react';
import { BiSolidLike, BiLike } from 'react-icons/bi';

type Props = {};

export default function LikeButton({}: Props) {
  const [isLiked, setIsLiked] = React.useState(false);

  if (isLiked) {
    return (
      <div>
        <BiSolidLike
          onClick={() => {
            setIsLiked(false);
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <BiLike
        onClick={() => {
          setIsLiked(true);
        }}
      />
    </div>
  );
}
