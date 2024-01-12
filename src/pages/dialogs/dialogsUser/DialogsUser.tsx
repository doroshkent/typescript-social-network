import React from 'react';
import { NavLink } from "react-router-dom";
import { S } from "pages/dialogs/Dialogs_Styles";

export type UserType = {
  id: string
  name: string
  avatar: string
  isOnline: boolean
}

type DialogUserPropsType = {
  id: string
  avatar: string
  name: string
  isOnline: boolean
}

export const DialogsUser: React.FC<DialogUserPropsType> = ({ id, name, avatar, isOnline }) => {
  return (
    <S.User as={ NavLink } to={ `/dialogs/${ id }` }>
      <img src={ avatar } alt="avatar" />
      <span>{ name }</span>
      <S.Status isOnline={ isOnline } />
    </S.User>
  );
};
