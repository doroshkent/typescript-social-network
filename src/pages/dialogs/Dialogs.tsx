import { SectionTitle } from 'components/SectionTitle';
import React from 'react';
import { S } from "./Dialogs_Styles";
import { v1 } from "uuid";
import yula from "assets/img/avatars/Yuli.png";
import pan from "assets/img/avatars/Pan.png";
import olga from "assets/img/avatars/Olga.png";
import mariya from "assets/img/avatars/Masha.png";
import nikita from "assets/img/avatars/Nikita.png";
import me from "assets/img/photo.webp";
import { DialogUser, UserType } from "pages/dialogs/dialogUser/DialogUser";
import { Dialog } from "pages/dialogs/dialog/Dialog";
import { MessageType } from "pages/dialogs/dialog/message/Message";

const dialogsUsers: Array<UserType> = [
  {
    id: v1(),
    name: "Yula",
    avatar: yula,
    isOnline: true,
  },
  {
    id: v1(),
    name: "Pan",
    avatar: pan,
    isOnline: false,
  },
  {
    id: v1(),
    name: "Olga",
    avatar: olga,
    isOnline: true,
  },
  {
    id: v1(),
    name: "Masha",
    avatar: mariya,
    isOnline: true,
  },
  {
    id: v1(),
    name: "Nikita",
    avatar: nikita,
    isOnline: false,
  },
  {
    id: v1(),
    name: "Yula",
    avatar: yula,
    isOnline: true,
  },
  {
    id: v1(),
    name: "Pan",
    avatar: pan,
    isOnline: false,
  },
  {
    id: v1(),
    name: "Olga",
    avatar: olga,
    isOnline: true,
  },
  {
    id: v1(),
    name: "Masha",
    avatar: mariya,
    isOnline: true,
  },
  {
    id: v1(),
    name: "Nikita",
    avatar: nikita,
    isOnline: false,
  },
]
const messages: Array<MessageType> = [
  {
    id: v1(),
    content: "Hey, how is your education?",
    isSent: false,
    authorAvatar: pan
  },
  {
    id: v1(),
    content: "Hey, trying my best",
    isSent: true,
    authorAvatar: me
  },
  {
    id: v1(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isSent: false,
    authorAvatar: pan
  },
  {
    id: v1(),
    content: "see you later",
    isSent: false,
    authorAvatar: pan
  },

]

export const Dialogs: React.FC = () => {
  return (
    <S.Dialogs>
      <SectionTitle>Messages</SectionTitle>
      <S.Box>
        <S.Header>
          { dialogsUsers.map( u => <DialogUser key={ u.id }  { ...u } /> ) }
        </S.Header>
        <Dialog messages={ messages } />
      </S.Box>
    </S.Dialogs>
  );
};
