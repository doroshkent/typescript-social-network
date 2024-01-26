import React from 'react';
import './App.css';
import { Header } from "widgets/header/Header";
import { Navbar } from "widgets/navbar/Navbar";
import { GridAppWrapper } from 'components/GridAppWrapper';
import { Content } from "widgets/content/Content";
import { RootStateType } from "redux/state";

type AppPropsType = {
  state: RootStateType
}

const App: React.FC<AppPropsType> = ({ state }) => {
  return (
    <div className="App">
      <GridAppWrapper>
        <Header />
        <Navbar navItems={ state.navbar.navItems } />
        <Content profilePage={ state.profilePage } dialogsPage={ state.dialogsPage } />
      </GridAppWrapper>
    </div>
  );
}

export default App;
