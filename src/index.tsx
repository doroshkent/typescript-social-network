import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from 'styles/Global.styled';
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
