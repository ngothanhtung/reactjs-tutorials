import React from 'react';
import './styles.css';

function Slider({ onChange }) {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ display: 'flex', marginBlock: 24 }}>
      <input
        type='range'
        min={0}
        max={100}
        value={value}
        className='slider'
        id='myRange'
        onInput={(e) => {
          setValue(e.target.value);

          if (onChange && typeof onChange === 'function') {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default Slider;
