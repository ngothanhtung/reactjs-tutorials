import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
type Props = {};

export default function LikeButton({}: Props) {
  const [isLiked, setIsLiked] = React.useState(false);

  if (isLiked) {
    return (
      <AiFillHeart
        onClick={() => {
          setIsLiked((x) => !x);
        }}
      />
    );
  }

  return (
    <AiOutlineHeart
      onClick={() => {
        setIsLiked((x) => !x);
      }}
    />
  );
}
