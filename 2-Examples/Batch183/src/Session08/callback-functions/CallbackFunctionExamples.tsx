import React from 'react';

import Control from './Control';
import Gallery from './Gallery';
import { DatePicker } from 'antd';

export default function CallbackFunctionExamples() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(1);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  return (
    <div>
      <Gallery index={currentImageIndex} />
      <Control
        currentImageIndex={currentImageIndex}
        onPreviousClick={() => {
          setCurrentImageIndex((c) => c - 1);
        }}
        onNextClick={() => {
          setCurrentImageIndex((c) => c + 1);
        }}
        onChange={(value) => {
          console.log(value);
        }}
      />

      <DatePicker
        onChange={(value) => {
          console.log(value);
          setCurrentDate(value?.toDate() ?? new Date());
        }}
      />
      <h2>{currentDate.toString()}</h2>
    </div>
  );
}
