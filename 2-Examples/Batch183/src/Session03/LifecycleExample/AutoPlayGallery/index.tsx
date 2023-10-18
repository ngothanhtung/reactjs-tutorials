import React from 'react';
import styles from './gallery.module.css';

const maxImageCount = 4;

export default function AutoPlayGallery() {
  const [index, setIndex] = React.useState(1);

  // let imagePath = `/images/${index}.jpeg`;
  let imagePath = '/images/' + index + '.jpeg';

  React.useEffect(() => {
    console.log('LifecycleExample: MOUNTING');
    const intervalId = setInterval(() => {
      console.log('Running');
      setIndex((i) => {
        if (i >= maxImageCount) {
          return 1;
        }
        return i + 1;
      });
    }, 2000);

    return () => {
      console.log('Clear interval');
      clearInterval(intervalId);
    };
  }, []);
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
            setIndex((i) => i - 1);
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
            setIndex((i) => i + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
