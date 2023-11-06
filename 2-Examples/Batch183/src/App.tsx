import './App.css';

import React from 'react';

import 'numeral/locales/vi';
import numeral from 'numeral';

import { AiFillApple, AiFillFacebook, AiFillGoogleCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

import BlockUI01 from './Session02/BlockUI01';
import Button from './Session02/Button';
import IconButton from './Session02/IconButton';
import PowerButton from './Session02/PowerButton';
import Products from './Session02/Products';
import Rating10 from './Session02/Rating10';
import TeamButton from './Session02/TeamButton';
import CheckButton from './Session03/CheckButton';
import Counter from './Session03/Counter';
import Gallery from './Session03/Gallery';
import LifecycleExample from './Session03/LifecycleExample';
import AutoPlayGallery from './Session03/LifecycleExample/AutoPlayGallery';
import MountingExample from './Session03/LifecycleExample/MountingExample';
import NewProps from './Session03/LifecycleExample/NewProps';
import LikeButton from './Session03/LikeButton';
import Onboarding from './Session03/Onboarding';
import Rating from './Session03/Rating';
import SwitchButton from './Session03/SwitchButton';
import Tab from './Session03/Tab';
import HandleEvent from './Session04/HandleEvent';
import OneChoice from './Session04/Quiz/OneChoice';
import ReactFormHook from './Session05/ReactFormHook';
import MusicPlayer from './XExercises/MusicPlayer';
import FillInTheBlank from './Session04/Quiz/FillInTheBlank';
import MultipleChoice from './Session04/Quiz/MultipleChoice';
import BasicForm from './Session05/BasicForm';
import Login from './Session06/Login';
import LoginWithAxios from './Session06/LoginWithAxios';
import GetDataWithAxios from './Session06/GetDataWithAxios';
import InsertDataWithAxios from './Session06/InsertDataWithAxios';
import DeleteDataWithAxios from './Session06/DeleteDataWithAxios';
import UpdateDataWithAxios from './Session06/UpdateDataWithAxios';
import CallApi from './Session06/Demo/CallApi';
import InsertCustomer from './Session06/Customers/InsertCustomer';
import Antd from './Session07/Antd';
import MemoHookExamples from './Session08/memo-hook/MemoHookExamples';
import CallbackHookExamples from './Session08/useCallback-hook/CallbackHookExamples';
import UseMemoHookExamples from './Session08/useMemo-hook';
import UseRefHookExamples from './Session08/useRef-hook/UseRefHookExamples';
import CallbackFunctionExamples from './Session08/callback-functions/CallbackFunctionExamples';

numeral.locale('vi');

function App() {
  const [show, setShow] = React.useState(true);
  const [count, setCount] = React.useState(100);

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

      {/* <Rating10 rate={7} /> */}
      {/* <BlockUI01 /> */}
      {/* <Counter /> */}

      {/* <LikeButton /> */}

      {/* <SwitchButton />
      <CheckButton /> */}

      {/* <Gallery /> */}
      {/* <Tab /> */}

      {/* <Rating stars={3} /> */}
      {/* <LifecycleExample /> */}
      {/* {show && <MountingExample />} */}

      {/* <button
        onClick={() => {
          setShow(true);
        }}
      >
        Mount
      </button>

      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Unmount
      </button>

      <NewProps count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change Props
      </button> */}

      {/* <HandleEvent /> */}
      {/* <Onboarding /> */}
      {/* <OneChoice questionContent='Chiến thắng Điện Biên Phủ vào năm nào?' answers={['1945', '1954', '1968', '1975', '1980']} correctAnswer='1954' /> */}
      {/* <OneChoice questionContent='Argentina vô địch World Cup năm 2022?' answers={['Đúng', 'Sai']} correctAnswer='Đúng' /> */}

      {/* <MultipleChoice questionContent='Những quốc gia nào từng vô địch World Cup?' answers={['Anh', 'Pháp', 'Nhật', 'Việt Nam', 'Canada']} correctAnswers={['Anh', 'Pháp']} /> */}

      {/* <FillInTheBlank questionContent='Hãy điền tên quốc gia ___ vô địch World Cup.' correctAnswer='Argentina' /> */}

      {/* <BasicForm /> */}
      {/* <ReactFormHook /> */}

      {/* SESSION 06 */}
      {/* <CallApi /> */}

      {/* <Login /> */}
      {/* <LoginWithAxios /> */}
      {/* <hr style={{ marginBlock: 48 }} /> */}
      {/* <GetDataWithAxios /> */}
      {/* <InsertDataWithAxios /> */}
      {/* <DeleteDataWithAxios /> */}
      {/* <UpdateDataWithAxios /> */}

      {/* <InsertCustomer /> */}

      {/* SESSION 07 */}
      {/* <Antd /> */}

      {/* SESSION 08 */}

      <CallbackFunctionExamples />
      {/* <MemoHookExamples /> */}
      {/* <CallbackHookExamples /> */}
      {/* <UseMemoHookExamples /> */}
      {/* <UseRefHookExamples /> */}
    </div>
  );
}

export default App;
