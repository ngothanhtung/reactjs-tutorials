import React from 'react';

function ChartBar2({ text = 'TEXT', color = 'pink', iconName = 'fa-solid fa-house', percentage = 50 }) {
  return (
    <div>
      <i className={iconName}></i>
      <span>{text}</span>
    </div>
  );
}

export default ChartBar2;
