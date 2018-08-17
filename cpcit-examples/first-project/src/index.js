import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputUsing from './InputUsing';
import LoginForm from './LoginForm';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginForm />, document.getElementById('root'));
registerServiceWorker();

