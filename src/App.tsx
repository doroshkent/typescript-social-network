import React from 'react';
import './App.css';
import { GridAppWrapper } from 'components/GridAppWrapper';
import { Content } from "widgets/content/Content";
import NavbarContainer from "widgets/navbar/NavbarContainer";
import HeaderContainer from "widgets/header/HeaderContainer";

const App = () => {
  return (
    <div className="App">
      <GridAppWrapper>
        <HeaderContainer />
        <NavbarContainer />
        <Content />
      </GridAppWrapper>
    </div>
  );
}

export default App;
