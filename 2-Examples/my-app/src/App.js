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
        <Teams color='yellow' users={['avatar-1.png', 'avatar-2.png']} />
        <Teams color='yellow' users={['avatar-1.png', 'avatar-2.png']} />
        <Teams color='yellow' users={['avatar-1.png', 'avatar-2.png']} />
      </div>
    </div>
  );
}

export default App;
