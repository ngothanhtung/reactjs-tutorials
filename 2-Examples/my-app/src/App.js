import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import IconButton from './components/IconButton';
import Teams from './components/Teams';

import ButtonWithTypeChecking from './Examples/TypeChecking/Button';
import LikeButton from './Examples/StateExamples/LikeButton';
import RateButton from './Examples/StateExamples/RateButton';
import Rate10Button from './Examples/StateExamples/Rate10Button';
import BlockUI05 from './Homeworks/Session02/BlockUI05';

import LifecycleExample from './Examples/LifecycleExample';

function App() {
  const [visible, setVisible] = React.useState(true);
  const [number, setNumber] = React.useState(1);
  return (
    <div className='App'>
      {/* <div>
        <Button />
        <IconButton text='Continue with Apple' />
        <IconButton text='Continue with Google' iconName='google' color='#ffffff' textColor='#000000' />
        <IconButton color='orange' textColor='#ffffff' borderColor='orange' text='Continue with Facebook' iconName='facebook' />
      </div> */}
      {/* <div>
        <Header />
      </div> */}
      {/* <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 24 }}>
        <Teams title='Miriam Jimenez' color='#12C0E7' textColor='white' users={['avatar-4.png']} />
        <Teams title='Teams' subTitle='Two currently' textColor='white' color='#740EF5' users={['avatar-1.png', 'avatar-2.png', 'avatar-3.png']} />
        <Teams title='New Teams' color='yellow' users={['avatar-6.png', 'avatar-5.png']} />
      </div> */}

      {/* TYPE CHECKING */}
      {/* <ButtonWithTypeChecking text='Hello' mode='contain' />
      <LikeButton />
      <LikeButton />
      <LikeButton />
      <hr />
      <RateButton />
      <Rate10Button /> */}

      {/* HOMEWORK - BLOCK UI 05 */}
      {/* <BlockUI05 /> */}

      {/* LIFE CYCLE */}
      {visible && <LifecycleExample number={number} />}
      <button
        onClick={() => {
          setNumber((n) => n + 5);
        }}
      >
        Change number
      </button>

      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Hide
      </button>
    </div>
  );
}

export default App;
