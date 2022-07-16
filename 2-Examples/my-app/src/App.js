import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import IconButton from './components/IconButton';

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
    </div>
  );
}

export default App;
