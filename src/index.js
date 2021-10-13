import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './components/card';
let x=80;

ReactDOM.render(
  <React.StrictMode>
      <Card name="oppo" price="150" />
      <Card name="Apple" price="170" />
      <Card name="Nokia" price="50" />
      <Card name="realme" price="125" />
      <Card name="MI" price="120" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
