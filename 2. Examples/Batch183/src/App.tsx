import './App.css';

import Button from './Session02/Button';
import IconButton from './Session02/IconButton';

import { AiFillApple, AiFillFacebook, AiFillGoogleCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

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
