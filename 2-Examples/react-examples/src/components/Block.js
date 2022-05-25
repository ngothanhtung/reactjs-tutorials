import React from 'react';

function Block(props) {
  return (
    <div style={{ marginInline: 8 }}>
      <h2 style={{ fontSize: 18, color: 'gray' }}>{props.title}</h2>
      <p style={{ fontSize: 14 }}>{props.content}</p>
    </div>
  );
}
export default Block;
