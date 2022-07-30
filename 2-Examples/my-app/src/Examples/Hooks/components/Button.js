import React from 'react';

function Button({ onClick, children }) {
  console.log('Rendering button - ', children);
  return <button onClick={onClick}>{children}</button>;
}

// export default Button;
export default React.memo(Button);
