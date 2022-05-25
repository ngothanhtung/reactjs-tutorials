import React from 'react';

function Header(props) {
  return (
    <div>
      <h1 style={{ fontSize: props.size, color: props.color }}>{props.text}</h1>
    </div>
  );
}

export default Header;
