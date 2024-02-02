import { SectionTitle } from 'components/SectionTitle';
import React from 'react';
import { S } from "./Dialogs_Styles";
import { DialogUser } from "pages/dialogs/dialogUser/DialogUser";
import { Dialog } from "pages/dialogs/dialog/Dialog";
import { DialogType, MessageType } from "redux/dialogsReducer";

type DialogsPropsType = {
  dialogs: DialogType[]
  messages: MessageType[]
  sendMessage: (newMessageText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({ dialogs, messages, sendMessage }) => {
  return (
    <S.Dialogs>
      <SectionTitle>Messages</SectionTitle>
      <S.Box>
        <S.Header>
          { dialogs.map( u => <DialogUser key={ u.id }  { ...u } /> ) }
        </S.Header>
        <Dialog messages={ messages } sendMessage={sendMessage}/>
      </S.Box>
    </S.Dialogs>
  );
};
