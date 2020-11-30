import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import config from '../config.json';

// https://docs.amplify.aws/lib/auth/start/q/platform/js#configure-your-application
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: config.COGNITO.REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: config.COGNITO.USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: config.COGNITO.APP_CLIENT_ID,
    mandatorySignIn: true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
