import React from 'react';
import InformationItem from './components/InformationItem';

import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai';
import styles from './Profile.module.css';

function Profile({ imageUrl = '', fullName = 'Full name', jobName = 'Job name', dob = '01/01/1990' }) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} width='100%' alt='' />
      <div>{fullName}</div>
      <div>{jobName}</div>

      <InformationItem icon={<AiOutlineCalendar />} label='DOB' value={dob} />
      <InformationItem icon={<AiOutlineHeart />} label='BG' value='B+' />
      <InformationItem />
      <InformationItem />
    </div>
  );
}

export default Profile;
