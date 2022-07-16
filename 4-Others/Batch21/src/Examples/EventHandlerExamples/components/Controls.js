import React from 'react';

function Controls({ onClick }) {
  const handleOnClick = (actionName) => {
    // console.log(actionName);
    // callback
    if (onClick && typeof onClick === 'function') {
      onClick(actionName);
    }
  };

  return (
    <div style={{ display: 'flex', flex: 1 }}>
      {/* SHUFFER */}
      <button
        onClick={() => {
          handleOnClick('shuffer');
        }}
      >
        Shuffer
      </button>

      {/* PREVIOUS */}
      <button
        onClick={() => {
          handleOnClick('previous');
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          handleOnClick('play');
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          handleOnClick('pause');
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          handleOnClick('next');
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          handleOnClick('repeat');
        }}
      >
        Repeat
      </button>
    </div>
  );
}

export default Controls;
