import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from 'styles/Global.styled';
import { BrowserRouter } from "react-router-dom";
import { state } from "redux/state";

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyle/>
      <App state={state} />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
