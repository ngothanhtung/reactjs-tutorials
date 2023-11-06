import React from 'react';

type Props = {
  currentImageIndex?: number;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
};

export default function Control({ currentImageIndex = 1, onNextClick, onPreviousClick }: Props) {
  const [count, setCount] = React.useState(currentImageIndex);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, gap: 8 }}>
        <button
          className='btn btn-primary'
          onClick={() => {
            setCount((c) => c - 1);
            if (onPreviousClick) {
              onPreviousClick();
            }
          }}
        >
          PREVIOUS
        </button>
        <strong>{count}</strong>
        <button
          className='btn btn-primary'
          onClick={() => {
            setCount((c) => c + 1);
            if (onNextClick) {
              onNextClick();
            }
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
