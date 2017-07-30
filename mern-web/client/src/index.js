import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Routes from './routes';
import './index.css';
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);
registerServiceWorker();
