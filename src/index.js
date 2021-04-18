import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JokeApi from './JokeApi';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <JokeApi />
  </React.StrictMode>,
  document.getElementById('root')
);
