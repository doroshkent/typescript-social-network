import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { News } from "pages/news/News";
import { Music } from "pages/music/Music";
import { Settings } from "pages/settings/Settings";
import { S } from "./Content_Styles";
import DialogsContainer from "pages/dialogs/DialogsContainer";
import UsersContainer from "pages/users/UsersContainer";
import ProfileContainer from "pages/profile/ProfileContainer";

export const Content = () => {
  return (
    <S.Content>
      <Route path="/"
             render={ () => <Redirect to='/profile' /> } />
      <Route path="/profile/:userId?"
             render={ () => <ProfileContainer /> }/>
      <Route path="/dialogs"
             render={ () => <DialogsContainer /> } />
      <Route path="/news" render={ () => <News /> } />
      <Route path="/music" render={ () => <Music /> } />
      <Route path="/settings" render={ () => <Settings /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
    </S.Content>
  );
};
