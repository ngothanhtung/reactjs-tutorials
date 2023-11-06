import React from 'react';

import Control from './Control';
import Gallery from './Gallery';

export default function CallbackFunctionExamples() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(1);

  return (
    <div>
      <Gallery index={currentImageIndex} />
      <Control
        onPreviousClick={() => {
          setCurrentImageIndex((c) => c - 1);
        }}
        onNextClick={() => {
          setCurrentImageIndex((c) => c + 1);
        }}
      />
    </div>
  );
}
