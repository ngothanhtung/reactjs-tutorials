import React from 'react';
import styles from './BlockUI01.module.css';

type Props = {
  title?: string;
  colorDark?: string;
  colorLight?: string;
  percentage?: number;
};

function Bar({ title = 'NO NAME', colorDark = '#E54D4C', colorLight = '#F75354', percentage = 0 }: Props) {
  return (
    <div className={styles.barContainer}>
      <div className={styles.leftColumn} style={{ backgroundColor: colorDark }}>
        <span>{title}</span>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.percentageBar} style={{ width: percentage + '%', backgroundColor: colorLight }}>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default function BlockUI01() {
  return (
    <div>
      <Bar title='BANDWIDTH' percentage={20} colorDark='#E54D4C' colorLight='#F65250' />
      <Bar title='STORAGE' percentage={50} colorDark='#2CB8CD' colorLight='#30C8DD' />
      <Bar title='USERS' percentage={70} colorDark='#4AC25E' colorLight='#51D567' />
      <Bar title='VISITORS' percentage={30} colorDark='#E9C318' colorLight='#FCD518' />
      <Bar title='EMAILS' percentage={45} />
      <Bar title='BASIC' percentage={80} />
      <Bar title='OTHERS' percentage={37} />
    </div>
  );
}
