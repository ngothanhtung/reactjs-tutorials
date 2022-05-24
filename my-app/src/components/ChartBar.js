import React from 'react';

function ChartBar(props) {
  return (
    <div style={{ display: 'flex', marginBottom: 12, backgroundColor: '#ecf0f1', height: 48 }}>
      <div style={{ display: 'flex', backgroundColor: props.color1, width: '20%', color: 'white', fontWeight: '700', justifyContent: 'end', alignItems: 'center', paddingRight: 24 }}>{props.text}</div>
      <div style={{ display: 'flex', backgroundColor: 'green', width: '80%' }}>
        <div style={{ display: 'flex', backgroundColor: props.color2, width: `${props.percentage}%`, alignItems: 'center', paddingLeft: 24 }}>{props.percentage} %</div>
        <div style={{ backgroundColor: 'pink', width: `${100 - props.percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ChartBar;
