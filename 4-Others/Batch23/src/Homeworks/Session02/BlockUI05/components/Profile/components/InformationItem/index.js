import React from 'react';

function InformationItem({ icon, label, value }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>{icon}</div>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}

export default InformationItem;
