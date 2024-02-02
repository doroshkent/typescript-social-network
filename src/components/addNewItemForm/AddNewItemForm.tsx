import React, { ChangeEvent, useState } from 'react';
import styled from "styled-components";

type AddNewItemFormPropsType = {
  btnTitle: string
  addNewItem: (newItemText: string) => void
}

export const AddNewItemForm: React.FC<AddNewItemFormPropsType> = ({btnTitle, addNewItem}) => {
  const [ newItemText, setNewItemText ] = useState( '' );
  const onNewItemChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewItemText( e.currentTarget.value );
  }
  const onAddNewItem = () => {
    addNewItem(newItemText);

  }
  return (
    <AddItemForm>
      <textarea value={ newItemText } onChange={ onNewItemChangeHandler } />
      <button onClick={onAddNewItem}>{btnTitle}</button>
    </AddItemForm>
  );
};

const AddItemForm = styled.div`

`
