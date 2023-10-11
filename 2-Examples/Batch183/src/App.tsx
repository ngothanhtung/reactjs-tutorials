import './App.css';

import Button from './Session02/Button';
import IconButton from './Session02/IconButton';

import { AiFillApple, AiFillFacebook, AiFillGoogleCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

import Gallery from './Session03/Gallery';
import Tab from './Session03/Tab';
import TeamButton from './Session02/TeamButton';
import PowerButton from './Session02/PowerButton';
import Products from './Session02/Products';
import MusicPlayer from './XExercises/MusicPlayer';
import SwitchButton from './Session03/SwitchButton';
import CheckButton from './Session03/CheckButton';
import BlockUI01 from './Session02/BlockUI01';
import Rating10 from './Session02/Rating10';

function App() {
  return (
    <div style={{ padding: 24 }}>
      {/* <Button text='Submit' color='red' icon={<FaHome />} />
      <Button text='Reset' color='#8e44ad' />
      <Button text='Save' color='#2980b9' /> */}
      {/* 
      <IconButton text='Get Started' iconRight={<AiOutlineArrowRight size={24} />} />
      <IconButton text='Continue with Apple' iconLeft={<AiFillApple size={24} />} />
      <IconButton text='Continue with Google' iconLeft={<AiFillGoogleCircle size={24} />} />
      <IconButton text='Continue with Facebook' iconLeft={<AiFillFacebook size={24} />} /> */}

      {/* <TeamButton title='Miriam Jimenez' /> */}
      {/* <TeamButton title='Tom Cruise' imageUrls={['https://i.insider.com/639f2bdbb5600000185b3934?width=1000&format=jpeg&auto=webp']} />
      <TeamButton
        backgroundColor='#740EF5'
        title='Tom Hank'
        imageUrls={[
          'https://i.insider.com/639f2bdbb5600000185b3934?width=1000&format=jpeg&auto=webp',
          'https://i.insider.com/639f2bdbb5600000185b3934?width=1000&format=jpeg&auto=webp',
          'https://static.independent.co.uk/2023/10/02/08/newFile.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp',
        ]}
      />
      <TeamButton
        backgroundColor='#FFF614'
        color='#000000'
        title='Tom Hank'
        imageUrls={['https://i.insider.com/639f2bdbb5600000185b3934?width=1000&format=jpeg&auto=webp', 'https://static.independent.co.uk/2023/10/02/08/newFile.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp']}
      /> */}

      {/* <PowerButton status='on' />
      <PowerButton status='off' /> */}

      {/* <Products /> */}

      {/* <TeamButton title='Miriam Jimenez' subTitle='Two currently' /> */}

      <Rating10 rate={7} />
      {/* <BlockUI01 /> */}

      {/* <SwitchButton />

      <CheckButton /> */}

      {/* <Gallery /> */}
      {/* <Tab /> */}
    </div>
  );
}

export default App;
