import React from 'react';
import './styles.css';

function Slider({ currentValue = 0, max = 100, onChange }) {
  return (
    <div style={{ display: 'flex', marginBlock: 24 }}>
      <input
        type='range'
        min={0}
        max={max}
        value={currentValue}
        className='slider'
        id='myRange'
        onInput={(e) => {
          if (onChange && typeof onChange === 'function') {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default Slider;
