import React from 'react';
import styles from './Onboarding.module.css';
type Props = {};

export default function Onboarding({}: Props) {
  const [index, setIndex] = React.useState(1);

  const handleNext = () => {
    setIndex((x) => x + 1);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <img src={`/images/onboarding/overlay${index % 2}.png`} alt='' />
        </div>
        <div className={styles.logo}>
          <img src='/images/onboarding/logo.png' alt='' />
        </div>
        <div className={styles.picture}>
          <img src={`/images/onboarding/${index}.png`} alt='' />
        </div>
        <div className={styles.title}>
          <span>Welcome to</span>
        </div>
        <div className={styles.subTitle}>
          <span>When you oder Eat Steet, we'll hook you up with exclusive coupon, specials and rewards</span>
        </div>
        <div className={styles.dots}>
          <div className={styles.activeDot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.footer}>
          <div className={styles.skipButton}>
            <span>Skip</span>
          </div>
          <button className={styles.button} onClick={handleNext}>
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
