import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


let database = firebase.database();
ReactDOM.render(<App database = {database} />, document.getElementById('root'));
registerServiceWorker();
