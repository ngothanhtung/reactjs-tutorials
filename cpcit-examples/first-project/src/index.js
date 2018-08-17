import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputUsing from './InputUsing';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InputUsing />, document.getElementById('root'));
registerServiceWorker();

