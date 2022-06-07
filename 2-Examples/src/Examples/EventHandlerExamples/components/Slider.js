import React from 'react';

function Slider({ max = 100, currentValue, onChange }) {
  const [value, setValue] = React.useState(currentValue);

  React.useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  console.log(value);
  return (
    <div>
      <input
        type='range'
        min={0}
        max={max}
        value={value}
        className='music-slider'
        onInput={(e) => {
          setValue(e.target.value);
          if (onChange && typeof onChange === 'function') {
            onChange(e.target.value);
          }
        }}
      ></input>
    </div>
  );
}

export default Slider;
