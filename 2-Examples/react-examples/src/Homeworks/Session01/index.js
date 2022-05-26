import React from 'react';
import ChartBar from './ChartBar';

function Session01() {
  return (
    <div>
      <ChartBar text='BANDWIDTH' color1='#2DB8CD' color2='#31C8DD' percentage={20} />
      <ChartBar text='STORAGE' color1='#E54D4C' color2='#F85354' percentage={50} />
      <ChartBar text='USERS' color1='#4AC25E' color2='#51D567' percentage={70} />
    </div>
  );
}

export default Session01;
