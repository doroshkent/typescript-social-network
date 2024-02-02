import React from 'react';
import { S } from "pages/dialogs/dialog/Dialog_Styles";

type MessagePropsType = {
  content: string
  avatar: string
  isSent: boolean
}

export const Message: React.FC<MessagePropsType> = ({ content, avatar, isSent }) => {
  return (
    <S.Message isSent={ isSent }>
      <figure>
        <img src={ avatar } alt="avatar" />
      </figure>
      <p>{ content }</p>
    </S.Message>
  );
};
