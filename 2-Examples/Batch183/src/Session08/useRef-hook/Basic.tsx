import React from 'react';

export default function Basic() {
  const refInput = React.useRef<HTMLInputElement>(null);

  const [color, setColor] = React.useState('red');

  return (
    <div>
      <button
        onClick={() => {
          refInput?.current?.focus();
        }}
      >
        Click me
      </button>
      {/* <button
        onClick={() => {
          document.getElementById('my-input')?.focus();
        }}
      >
        Focus
      </button> */}
      <input ref={refInput} />
      {/* <input id='my-input' /> */}
    </div>
  );
}
