import React from 'react';
import Block4 from './Block4';
import ChartBar from './ChartBar';

import ChartBar2 from './ChartBar2';

function Session01() {
  return (
    <div>
      <ChartBar text='BANDWIDTH' color1='#E44D4C' color2='#F75354' percentage={50} />
      <ChartBar text='STORAGE' color1='#2DB8CD' color2='#2DB8CD' percentage={50} />
      <ChartBar text='USERS' color1='#4AC25E' color2='#51D567' percentage={70} />
      <ChartBar text='VISITORS' color1='#E9C318' color2='#FCD518' percentage={30} />

      <hr />

      <ChartBar2 />

      <hr />
      <Block4 text={`TODAY'S VISITORS`} total={24599} percentageItems={[40, 35, 60, 75, 40]} />
    </div>
  );
}

export default Session01;
