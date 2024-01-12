import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from 'styles/Global.styled';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
