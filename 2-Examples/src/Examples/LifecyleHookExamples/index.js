import React from 'react';
import Counter from './Counter';

function LifecyleHookExamples() {
  const [showCounter, setShowCounter] = React.useState(true);
  return (
    <div>
      {showCounter && <Counter />}
      <button
        onClick={() => {
          setShowCounter((v) => !v);
        }}
      >
        Unmount Counter
      </button>
    </div>
  );
}

export default LifecyleHookExamples;
