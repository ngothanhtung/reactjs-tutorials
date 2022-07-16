import React from 'react';
import ColumnBar from './components/ColumnBar';

function Block4({ text = 'VISSITORS', total = 0, percentageItems = [50, 50, 50, 50, 50] }) {
  return (
    <div>
      <ColumnBar text='MON' percentage={percentageItems[0]} />
      <ColumnBar text='TUE' percentage={percentageItems[1]} />
      <ColumnBar text='WED' percentage={percentageItems[2]} />
      <ColumnBar text='THU' percentage={percentageItems[3]} />
      <ColumnBar text='FRI' percentage={percentageItems[4]} />
    </div>
  );
}

export default Block4;
