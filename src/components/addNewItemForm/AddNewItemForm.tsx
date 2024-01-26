import React, { ChangeEvent, useState } from 'react';
import styled from "styled-components";

type AddNewItemFormPropsType = {
  btnTitle: string
}

export const AddNewItemForm: React.FC<AddNewItemFormPropsType> = ({btnTitle}) => {
  const [ newItemText, setNewItemText ] = useState( '' );
  const onNewItemChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewItemText( e.currentTarget.value );
  }
  return (
    <AddItemForm>
      <textarea value={ newItemText } onChange={ onNewItemChangeHandler } />
      <button onClick={() => alert(newItemText)}>{btnTitle}</button>
    </AddItemForm>
  );
};

const AddItemForm = styled.form`

`
