import React from 'react';
import { Route } from "react-router-dom";
import { Profile } from "pages/profile/Profile";
import { Dialogs } from "pages/dialogs/Dialogs";
import { News } from "pages/news/News";
import { Music } from "pages/music/Music";
import { Settings } from "pages/settings/Settings";
import { S } from "./Content_Styles";
import { StateRootType } from "redux/state";

type ContentPropsType = {
  state: StateRootType
}

export const Content: React.FC<ContentPropsType> = ({state}) => {
  return (
    <S.Content>
      <Route path="/profile" render={ () => <Profile state={state.profilePage} /> } />
      <Route path="/dialogs" render={ () => <Dialogs /> } />
      <Route path="/news" render={ () => <News /> } />
      <Route path="/music" render={ () => <Music /> } />
      <Route path="/settings" render={ () => <Settings /> } />
    </S.Content>
  );
};
