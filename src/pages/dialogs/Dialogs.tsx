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
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type UserType = {
  id: string
  name: string
  avatar: string
  isOnline: boolean
}

type MessageType = {
  id: string,
  content: string,
  isSent: boolean,
  authorAvatar: string
}

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
      <SectionTitle>
        Messages
      </SectionTitle>
      <S.MessagesBox>
        <S.MessagesHeader>
          { dialogsUsers.map( u => (
            <S.UserAvatar as={NavLink} key={ u.id } to={ `/dialogs/${u.id}` }>
              <img src={ u.avatar } alt="avatar"/>
              <span>{ u.name }</span>
              <S.Status isOnline={ u.isOnline } />
            </S.UserAvatar>
          ) ) }
        </S.MessagesHeader>
        <S.MessagesContent>
          <S.ChatHeader>
            <p>
              last seen online today at 12:53
            </p>
          </S.ChatHeader>
          <S.ChatContent>
            <S.ChattingArea>
              { messages.map( m => (
              <S.Message key={ m.id } isSent={ m.isSent }>
                <figure>
                  <img src={ m.authorAvatar } alt="avatar"/>
                </figure>
                <p>{ m.content }</p>
              </S.Message>
            ) ) }
            </S.ChattingArea>
          </S.ChatContent>
          <S.SendMessageForm>
            <textarea rows={1} placeholder={"say something..."} />
            <button><FaTelegramPlane /></button>
          </S.SendMessageForm>
        </S.MessagesContent>
      </S.MessagesBox>
    </S.Dialogs>
  );
};
