import React from 'react';
import styled from "styled-components";
import { Post } from './post/Post';
import { AddNewPostForm } from "pages/profile/posts/addNewPostForm/AddNewPostForm";

export const Posts: React.FC = () => {
  return (
    <MyPosts>
      <h2>My Posts</h2>
      <AddNewPostForm />
      <Post postContent={"My first post"} likesCount={3} />
      <Post postContent={"Need your support"} likesCount={2} />
      <Post postContent={"Love React"} likesCount={10} />
    </MyPosts>
  );
};

const MyPosts = styled.section`
 article + article {
   margin-top: 10px;
 }
`
