import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

var config = {
      apiKey: "AIzaSyC4TZ8u6OsS_3aoUCk9zxKm-zrQLf8ULPw",
      authDomain: "voluntindy.firebaseapp.com",
      databaseURL: "https://voluntindy.firebaseio.com",
      projectId: "voluntindy",
      storageBucket: "",
      messagingSenderId: "30007106289"
};
let app = firebase.initializeApp(config);

<<<<<<< HEAD
ReactDOM.render(<App/>, document.getElementById('root'));
=======
ReactDOM.render(<App firebase={app} />, document.getElementById('root'));
>>>>>>> 78ff7326b70db3d36252dc1b7cbb2f6804ec1c65
registerServiceWorker();
