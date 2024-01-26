import { SectionTitle } from 'components/SectionTitle';
import React from 'react';
import { S } from "./Dialogs_Styles";
import { DialogUser } from "pages/dialogs/dialogUser/DialogUser";
import { Dialog } from "pages/dialogs/dialog/Dialog";
import { MessageType, DialogType } from "redux/state";

type DialogsPropsType = {
  dialogs: DialogType[]
  messages: MessageType[]
}

export const Dialogs: React.FC<DialogsPropsType> = ({ dialogs, messages }) => {
  return (
    <S.Dialogs>
      <SectionTitle>Messages</SectionTitle>
      <S.Box>
        <S.Header>
          { dialogs.map( u => <DialogUser key={ u.id }  { ...u } /> ) }
        </S.Header>
        <Dialog messages={ messages } />
      </S.Box>
    </S.Dialogs>
  );
};
