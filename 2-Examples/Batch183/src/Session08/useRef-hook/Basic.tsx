import React from 'react';

export default function Basic() {
  const refInput = React.useRef<HTMLInputElement>(null);

  return (
    <div>
      <button
        onClick={() => {
          refInput?.current?.focus();
        }}
      >
        Click me
      </button>
      <input ref={refInput} />
    </div>
  );
}
