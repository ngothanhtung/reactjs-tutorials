import React from 'react';
import styles from './TeamButton.module.css';

type Props = {
  title?: string;
  // imageUrl?: string;
  imageUrls: string[];
  subTitle?: string;
  backgroundColor?: string;
  color?: string;
};

export default function TeamButton({ title = 'No Name', subTitle = '', imageUrls, backgroundColor = '#12C0E7', color = '#ffffff' }: Props) {
  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      <div className={styles.avatarContainer}>
        {/* <div className={styles.avatar}>
          <img className={styles.avatarImage} src={item} alt='avatar' />
        </div> */}
        {imageUrls.map((item, index) => {
          return (
            <div key={index} className={styles.avatar} style={{ borderColor: backgroundColor }}>
              <img className={styles.avatarImage} src={item} alt='avatar' />
            </div>
          );
        })}
      </div>
      <div className={styles.contentContainer}>
        <span className={styles.title} style={{ color: color }}>
          {title}
        </span>
        <span className={styles.subTitle} style={{ color: color }}>
          {subTitle}
        </span>
      </div>
    </div>
  );
}
