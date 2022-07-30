import React from 'react';

function Basic() {
  const refInput = React.useRef(null);

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

export default Basic;
