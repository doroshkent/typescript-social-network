import React from 'react';
import { S } from "pages/dialogs/dialog/Dialog_Styles";

export type MessageType = {
  id: string,
  content: string,
  isSent: boolean,
  authorAvatar: string
}

type MessagePropsType = {
  content: string
  authorAvatar: string
  isSent: boolean
}

export const Message: React.FC<MessagePropsType> = ({ content, authorAvatar, isSent }) => {
  return (
    <S.Message isSent={ isSent }>
      <figure>
        <img src={ authorAvatar } alt="avatar" />
      </figure>
      <p>{ content }</p>
    </S.Message>
  );
};
