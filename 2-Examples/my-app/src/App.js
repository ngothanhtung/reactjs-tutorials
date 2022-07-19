import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import IconButton from './components/IconButton';
import Teams from './components/Teams';

function App() {
  return (
    <div className='App'>
      <div>
        <Button />
        <IconButton text='Continue with Apple' />
        <IconButton text='Continue with Google' iconName='google' color='#ffffff' textColor='#000000' />
        <IconButton color='orange' textColor='#ffffff' borderColor='orange' text='Continue with Facebook' iconName='facebook' />
      </div>
      <div>
        <Header />
      </div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 24 }}>
        <Teams title='Miriam Jimenez' color='#12C0E7' textColor='white' users={['avatar-4.png']} />
        <Teams title='Teams' subTitle='Two currently' textColor='white' color='#740EF5' users={['avatar-1.png', 'avatar-2.png', 'avatar-3.png']} />
        <Teams title='New Teams' color='yellow' users={['avatar-6.png', 'avatar-5.png']} />
      </div>
    </div>
  );
}

export default App;
