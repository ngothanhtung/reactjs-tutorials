import React from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

function LikeButton() {
  // State
  const [like, setLike] = React.useState(false);

  return (
    <div>
      {like && (
        <AiFillLike
          onClick={() => {
            setLike(false);
          }}
        />
      )}
      {!like && (
        <AiOutlineLike
          onClick={() => {
            setLike(true);
          }}
        />
      )}
    </div>
  );
}

export default LikeButton;
