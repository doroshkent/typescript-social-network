import React from 'react';
import { Route } from "react-router-dom";
import { Profile } from "pages/profile/Profile";
import { News } from "pages/news/News";
import { Music } from "pages/music/Music";
import { Settings } from "pages/settings/Settings";
import { S } from "./Content_Styles";
import DialogsContainer from "pages/dialogs/DialogsContainer";
import UsersContainer from "pages/users/UsersContainer";

export const Content = () => {
  return (
    <S.Content>
      <Route path="/profile"
             render={ () => <Profile /> } />
      <Route path="/dialogs"
             render={ () => <DialogsContainer /> } />
      <Route path="/news" render={ () => <News /> } />
      <Route path="/music" render={ () => <Music /> } />
      <Route path="/settings" render={ () => <Settings /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
    </S.Content>
  );
};
