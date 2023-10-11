import React from 'react';
import styles from './gallery.module.css';

const maxImageCount = 4;

type Props = {};

export default function Gallery({}: Props) {
  const [index, setIndex] = React.useState(1);

  // let imagePath = `/images/${index}.jpeg`;
  let imagePath = '/images/' + index + '.jpeg';

  return (
    <div className={styles.container}>
      {/* IMAGE */}
      <img className={styles.imageBig} src={imagePath} alt='' />

      <div className={styles.buttonContainer}>
        {/* PREVIOUS BUTTON */}
        <button
          disabled={index === 1}
          style={{ backgroundColor: index === 1 ? 'gray' : 'blueviolet' }}
          className={styles.button}
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Previous
        </button>

        {/* TEXT */}
        <div className={styles.text}>
          {index} / {maxImageCount}
        </div>

        {/* NEXT BUTTON */}
        <button
          disabled={index === maxImageCount}
          style={{ backgroundColor: index === maxImageCount ? 'gray' : 'blueviolet' }}
          className={styles.button}
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
