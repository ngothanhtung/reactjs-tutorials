import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputUsing from './InputUsing';
import LoginForm from './LoginForm';
import Quiz from './Quiz';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Quiz />, document.getElementById('root'));
registerServiceWorker();

