import { Auth } from 'aws-amplify';

import logo from './logo.svg';
import './App.css';

function App() {
  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: 'tungnt',
        password: 'MKkb@1980',
        attributes: {
          email: 'tungnt@softech.vn', // optional
          phone_number: '0905157803', // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button onClick={signUp}> SignUp</button>
      </header>
    </div>
  );
}

export default App;
