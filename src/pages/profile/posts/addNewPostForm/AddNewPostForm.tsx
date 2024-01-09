import React from 'react';
import styled from "styled-components";

export const AddNewPostForm: React.FC = () => {
  return (
    <AddPostForm>
      <textarea/>
      <button>Add new post</button>
    </AddPostForm>
  );
};

const AddPostForm = styled.form`

`
