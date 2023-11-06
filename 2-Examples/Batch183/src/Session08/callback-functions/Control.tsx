import React from 'react';

type Props = {
  currentImageIndex?: number;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
  onChange?: (value: any) => void;
};

export default function Control({ currentImageIndex = 1, onNextClick, onPreviousClick, onChange }: Props) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, gap: 8 }}>
        <button
          className='btn btn-primary'
          onClick={() => {
            if (onPreviousClick) {
              // callback function
              onPreviousClick();
            }
          }}
        >
          PREVIOUS
        </button>
        <strong>{currentImageIndex}</strong>
        <button
          className='btn btn-primary'
          onClick={() => {
            if (onNextClick) {
              // callback function
              onNextClick();
            }
          }}
        >
          NEXT
        </button>

        <button
          onClick={() => {
            // Tinh toán ...

            if (onChange) {
              onChange('Xin chào');
            }
          }}
        >
          On Change
        </button>
      </div>
    </div>
  );
}
