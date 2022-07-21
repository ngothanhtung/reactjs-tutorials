import React from 'react';
import Profile from './components/Profile';

function BlockUI05() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <Profile imageUrl='https://i.pravatar.cc/150?img=59' fullName='Nguyễn Chánh Bảo' jobName='React Developer' />
      <Profile imageUrl='https://i.pravatar.cc/150?img=18' fullName='Phan Phú Đạt' jobName='Fullstack Developer' />
      <Profile imageUrl='https://i.pravatar.cc/150?img=14' fullName='Trần Văn Ánh' jobName='UI/UX Designer' />
      <Profile imageUrl='https://i.pravatar.cc/150?img=66' fullName='Lê Thanh Tự' jobName='Director of Project' />
    </div>
  );
}

export default BlockUI05;
