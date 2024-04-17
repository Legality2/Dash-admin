import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jQuery from 'jquery';
import App from './components/app/App';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/js/theme.js';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './assets/css/untitled.css';
import store from './appStore/store';
import reportWebVitals from './reportWebVitals';
//this is a test note for commit
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
