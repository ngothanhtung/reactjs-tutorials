import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDl57eWoSAHHSjRIJ3UnMJqh3MP_fnkhyc",
  authDomain: "fir-training-2c5ac.firebaseapp.com",
  databaseURL: "https://fir-training-2c5ac.firebaseio.com",
  projectId: "fir-training-2c5ac",
  storageBucket: "fir-training-2c5ac.appspot.com",
  messagingSenderId: "233367019481"
};

firebase.initializeApp(config);
export const firebaseHelper = firebase;