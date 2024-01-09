import React from 'react';
import './App.css';
import { Header } from "widgets/header/Header";
import { Navbar } from "widgets/navbar/Navbar";
import { Profile } from "pages/profile/Profile";
import { GridAppWrapper } from 'components/GridAppWrapper';

function App() {
  return (
    <div className="App">
      <GridAppWrapper>
        <Header/>
        <Navbar/>
        <Profile/>
      </GridAppWrapper>
    </div>
  );
}

export default App;
