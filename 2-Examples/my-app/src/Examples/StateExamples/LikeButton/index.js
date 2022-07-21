import React from 'react';
import styles from './LikeButton.module.css';

function LikeButton() {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <button
      className={isLiked ? styles.buttonLiked : styles.button}
      onClick={() => {
        setIsLiked((s) => !s);
      }}
    >
      Like Button
    </button>
  );
}

export default LikeButton;
