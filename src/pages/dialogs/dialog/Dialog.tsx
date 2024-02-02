import React from 'react';
import { S } from "pages/dialogs/dialog/Dialog_Styles";
import { Message } from "pages/dialogs/dialog/message/Message";
import { AddNewItemForm } from "components/addNewItemForm/AddNewItemForm";
import { MessageType } from "redux/dialogsReducer";

type DialogPropsType = {
  messages: MessageType[]
  sendMessage: (newMessageText: string) => void
}

export const Dialog: React.FC<DialogPropsType> = ({ messages, sendMessage }) => {
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
      <S.SendMessageArea>
        <AddNewItemForm btnTitle={"send"} addNewItem={sendMessage}/>
      </S.SendMessageArea>
    </S.Dialog>
  );
};
