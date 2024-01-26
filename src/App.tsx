import React from 'react';
import './App.css';
import { Header } from "widgets/header/Header";
import { Navbar } from "widgets/navbar/Navbar";
import { GridAppWrapper } from 'components/GridAppWrapper';
import { Content } from "widgets/content/Content";
import { StateRootType } from "redux/state";

type AppPropsType = {
  state: StateRootType
}

const App: React.FC<AppPropsType> = ({state}) => {
  return (
    <div className="App">
      <GridAppWrapper>
        <Header />
        <Navbar />
        <Content state={state} />
      </GridAppWrapper>
    </div>
  );
}

export default App;
