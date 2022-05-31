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
      {/* <input ref={refInput} /> */}

      <FancyInput ref={refInput} />
    </div>
  );
}

const FancyInput = React.forwardRef((props, ref) => {
  const refInput = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput?.current?.focus();
    },
  }));
  return <input ref={refInput} style={{ height: 32, border: '1px gray dashed' }} />;
});

export default Basic;
