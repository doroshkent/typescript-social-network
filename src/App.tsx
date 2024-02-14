import React from 'react';
import './App.css';
import { Header } from "widgets/header/Header";
import { GridAppWrapper } from 'components/GridAppWrapper';
import { Content } from "widgets/content/Content";
import NavbarContainer from "widgets/navbar/NavbarContainer";

const App = () => {
  return (
    <div className="App">
      <GridAppWrapper>
        <Header />
        <NavbarContainer />
        <Content />
      </GridAppWrapper>
    </div>
  );
}

export default App;
