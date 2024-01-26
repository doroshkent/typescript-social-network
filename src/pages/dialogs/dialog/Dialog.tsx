import React from 'react';
import { S } from "pages/dialogs/dialog/Dialog_Styles";
import { FaTelegramPlane } from "react-icons/fa";
import { Message } from "pages/dialogs/dialog/message/Message";
import { MessageType } from "redux/state";

type DialogPropsType = {
  messages: MessageType[]
}

export const Dialog: React.FC<DialogPropsType> = ({ messages }) => {
  return (
    <S.Dialog>
      <S.Header>
        <p>last seen online today at 12:53</p>
      </S.Header>
      <S.Content>
        <S.List>
          { messages.map( m => <Message key={ m.id }  { ...m } /> ) }
        </S.List>
      </S.Content>
      <S.SendMessageForm>
        <textarea rows={ 1 } placeholder={ "say something..." } />
        <button><FaTelegramPlane /></button>
      </S.SendMessageForm>
    </S.Dialog>
  );
};
