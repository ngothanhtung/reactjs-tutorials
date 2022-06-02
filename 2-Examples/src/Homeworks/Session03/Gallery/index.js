import React from 'react';
import styles from './gallery.module.css';

const maxImageCount = 4;

function Gallery() {
  const [index, setIndex] = React.useState(1);

  let imagePath = `/images/${index}.jpeg`;

  return (
    <div>
      <img className={styles.image_big} src={imagePath} alt='' />
      <div className={styles.button_container}>
        <button
          disabled={index === 1}
          style={{ backgroundColor: index === 1 ? 'gray' : null }}
          className={styles.button_navigation}
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Previous
        </button>
        <div className={styles.text}>
          {index} / {maxImageCount}
        </div>
        <button
          disabled={index === maxImageCount}
          style={{ backgroundColor: index === maxImageCount ? 'gray' : null }}
          className={styles.button_navigation}
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery;
