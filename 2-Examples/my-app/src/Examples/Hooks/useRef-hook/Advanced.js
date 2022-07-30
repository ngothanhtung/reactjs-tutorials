import React from 'react';

// Child component
const FancyInput = React.forwardRef((props, ref) => {
  const refInput = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput?.current?.focus();
    },
  }));
  return <input ref={refInput} style={{ height: 32, border: '1px gray dashed' }} />;
});

function Advanced() {
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

      <FancyInput ref={refInput} />
    </div>
  );
}

export default Advanced;
