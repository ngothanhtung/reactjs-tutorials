import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
import IconButton from './IconButton';

import { FaHome } from 'react-icons/fa';
import { AiOutlineArrowRight, AiFillApple, AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai';

function App() {
  return (
    <div>
      <Button text='Submit' color='red' icon={<FaHome />} />
      <Button text='Reset' color='#8e44ad' />
      <Button text='Save' color='#2980b9' />

      <IconButton text='Get Started' iconRight={<AiOutlineArrowRight />} />
      <IconButton text='Continue with Apple' iconLeft={<AiFillApple size={24} />} />
      <IconButton text='Continue with Google' iconLeft={<AiFillGoogleCircle size={24} />} />
      <IconButton text='Continue with Facebook' iconLeft={<AiFillFacebook size={24} />} />
    </div>
  );
}

export default App;
