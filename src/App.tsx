import React from 'react';
import './App.css';
import { Header } from "widgets/header/Header";
import { Navbar } from "widgets/navbar/Navbar";
import { Profile } from "pages/profile/Profile";
import { GridAppWrapper } from 'components/GridAppWrapper';
import styled from "styled-components";
import { Dialogs } from "pages/dialogs/Dialogs";

function App() {
  return (
    <div className="App">
      <GridAppWrapper>
        <Header />
        <Navbar />
        <Content>
          <Profile />
          {/*<Dialogs />*/}
        </Content>
      </GridAppWrapper>
    </div>
  );
}

const Content = styled.div`
  grid-area: content;
  background-color: #b8d9c8;
`

export default App;
