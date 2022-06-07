import React from 'react';
import Button from './components/Button';
import LikeButton from './components/LikeButton';

function ConditionalRenderingExamples() {
  return (
    <div>
      <Button
        disabled={false}
        onClick={() => {
          console.log('OK');
        }}
      />

      <LikeButton
        type='haha'
        onClick={() => {
          console.log('LikeButton clicked');
        }}
      />
    </div>
  );
}

export default ConditionalRenderingExamples;
