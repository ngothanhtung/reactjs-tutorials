import React from 'react';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';

function LikeButton({ type = 'like', onClick }) {
  const handleOnClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  let component = null;

  if (type === 'like') {
    component = <AiFillLike onClick={handleOnClick} />;
  } else if (type === 'love') {
    component = <AiFillHeart onClick={handleOnClick} />;
  } else if (type === 'haha') {
    component = <button>HAHA</button>;
  }

  return <div>{component}</div>;
}

LikeButton.propTypes = {
  type: PropTypes.oneOf(['like', 'love', 'haha']),
};

export default LikeButton;
