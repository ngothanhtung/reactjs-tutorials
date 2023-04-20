import React from 'react';
import InfoColumn from './components/InfoColumn';
import './App.css';
import Profile from './components/Profile';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import Rates from './components/Rates';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='main'>
      {/* <InfoColumn title='BANDWIDTH' percent={20} mainColor='#E44D4C' />
      <InfoColumn title='STORAGE' percent={50} mainColor='#2EB8CD' subColor='#32C7DD' />
      <InfoColumn title='USERS' percent={70} mainColor='#4AC25E' />
      <InfoColumn title='VISITORS' percent={30} mainColor='#E9C318' />
      <InfoColumn title='EMAILS' percent={45} mainColor='#BB70D5' />
      <InfoColumn title='BASIC' percent={80} />
      <InfoColumn title='OTHERS' percent={37} /> */}

      {/* <Profile /> */}
      {/* <LikeButton /> */}
      {/* <Counter /> */}
      {/* <Rates /> */}
      <Gallery />
    </div>
  );
}

export default App;
