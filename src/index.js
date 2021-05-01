import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase=require('firebase/app');
require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyAyPmnNgyUEmifLBGAdQIBB83ccEj-I0Js",
  authDomain: "evernote-clone-a9c42.firebaseapp.com",
  projectId: "evernote-clone-a9c42",
  storageBucket: "evernote-clone-a9c42.appspot.com",
  messagingSenderId: "217687577999",
  appId: "1:217687577999:web:7dd9590b689387267e27fa"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
