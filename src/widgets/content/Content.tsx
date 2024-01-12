import React from 'react';
import { Route } from "react-router-dom";
import { Profile } from "pages/profile/Profile";
import { Dialogs } from "pages/dialogs/Dialogs";
import { News } from "pages/news/News";
import { Music } from "pages/music/Music";
import { Settings } from "pages/settings/Settings";
import { S } from "./Content_Styles";

export const Content = () => {
  return (
    <S.Content>
      <Route path="/profile" component={ Profile } />
      <Route path="/dialogs" component={ Dialogs } />
      <Route path="/news" component={ News } />
      <Route path="/music" component={ Music } />
      <Route path="/settings" component={ Settings } />
    </S.Content>
  );
};
