import React from 'react';
// Cách 1:
// import './styles.css';

// Cách 2: Phổ biến cho components
import styles from './IconButton.module.css';

function IconButton({ color = '#000000', textColor = '#ffffff', borderColor = '#000000', iconName = 'apple', text = 'Button Name' }) {
  return (
    <div
      className={styles.button}
      style={{
        backgroundColor: color,
        border: '2px solid',
        borderColor: borderColor,
      }}
    >
      <div className={styles.icon}>
        <img src={`/images/${iconName}.png`} width='20' height='22' alt='' />
      </div>
      <div className={styles.text} style={{ color: textColor }}>
        {text}
      </div>
      <div className={styles.icon}></div>
    </div>
  );
}

export default IconButton;
