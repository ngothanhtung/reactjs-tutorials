import React from 'react';
import './styles.css';
type Props = {
  currentValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

export default function Slider({ currentValue = 0, min = 0, max = 100, onChange }: Props) {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.background = `linear-gradient(to right, #4834d4 0%, #4834d4 ${((currentValue - min) / (max - min)) * 100}%, #d3d3d3 ${((currentValue - min) / (max - min)) * 100}%, #d3d3d3 100%)`;
    }
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBlock: 24 }}>
      <div style={{ display: 'flex', width: 320 }}>
        <input
          ref={ref}
          step={1}
          type='range'
          min={0}
          max={max}
          value={currentValue.toFixed(0)}
          className='slider'
          id='myRange'
          onInput={(e) => {
            const value = parseInt((e.target as HTMLInputElement).value);
            if (onChange && typeof onChange === 'function') {
              onChange(value);
            }
          }}
        />
      </div>
    </div>
  );
}
