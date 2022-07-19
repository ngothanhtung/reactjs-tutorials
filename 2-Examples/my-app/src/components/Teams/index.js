import React from 'react';
import Avatar from './components/Avatar';
import styles from './Teams.module.css';

export default function Teams({ title = 'Title', subTitle = 'Sub title', color = '#12C0E7', users = ['avatar-1.png', 'avatar-2.png', 'avatar-3.png'] }) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.leftColumn}>
        {users.map((item, index) => {
          return <Avatar avatarName={item} borderColor={users.length > 1 ? color : 'white'} style={{ marginLeft: index > 0 ? -20 : 0 }} />;
        })}
      </div>
      <div className={styles.rightColumn}>
        <div>{title}</div>
        <div>{subTitle}</div>
      </div>
    </div>
  );
}
