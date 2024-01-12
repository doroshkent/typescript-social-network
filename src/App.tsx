import React from 'react';
import './App.css';
import { Header } from "widgets/header/Header";
import { Navbar } from "widgets/navbar/Navbar";
import { GridAppWrapper } from 'components/GridAppWrapper';
import { Content } from "widgets/content/Content";

function App() {
  return (
    <div className="App">
      <GridAppWrapper>
        <Header />
        <Navbar />
        <Content />
      </GridAppWrapper>
    </div>
  );
}

export default App;
