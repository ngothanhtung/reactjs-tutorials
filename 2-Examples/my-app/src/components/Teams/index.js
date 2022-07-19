import React from 'react';
import Avatar from './components/Avatar';
import styles from './Teams.module.css';

export default function Teams({ title = 'Title', subTitle, color = '#12C0E7', textColor = '#000000', users = ['avatar-1.png', 'avatar-2.png', 'avatar-3.png'] }) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.leftColumn}>
        {users.map((item, index) => {
          return <Avatar avatarName={item} borderColor={users.length > 1 ? color : 'white'} style={{ marginLeft: index > 0 ? -20 : 0 }} />;
        })}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.title} style={{ color: textColor }}>
          {title}
        </div>
        <div className={styles.subTitle} style={{ color: textColor }}>
          {subTitle}
        </div>
      </div>
    </div>
  );
}
