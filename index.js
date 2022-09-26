import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Primef from './primef';
import { Primec } from './primec';
import Fibonaccif from './fibonaccif';
import { Fibonaccic } from './fibonaccic';
import Sumarrayf from './sumarrayf';
import { Sumarrayc } from './sumarrayc';
import Reversestr from './reversestr';
import { Reversestrc } from './reversestrc';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primef />
    <Primec />
    <Fibonaccif />
    <Fibonaccic />
    <Sumarrayf />
    <Sumarrayc />
    <Reversestr />
    <Reversestrc />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
