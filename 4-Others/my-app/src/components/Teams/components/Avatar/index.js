import React from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ avatarName = 'avatar-1.png', style = null, borderColor = '#740EF5' }) {
  const avatarStyle = {
    ...style,
    borderColor: borderColor,
  };

  return (
    <div className={styles.avatar} style={avatarStyle}>
      <img src={`/images/avatars/${avatarName}`} style={{ width: '100%' }} alt='' />
    </div>
  );
}
