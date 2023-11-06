import React from 'react';

type Props = {
  handleClick: () => void;
  children: React.ReactNode;
};

function Button({ handleClick, children }: Props) {
  console.log('Rendering button - ', children);
  return (
    <button style={{ backgroundColor: 'yellow' }} onClick={handleClick}>
      {children}
    </button>
  );
}
export default React.memo(Button);
