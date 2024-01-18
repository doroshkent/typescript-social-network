import React from 'react';
import styled from "styled-components";
import { Post } from './post/Post';
import { AddNewPostForm } from "pages/profile/posts/addNewPostForm/AddNewPostForm";
import { v4 } from "uuid";

type PostType = {
  id: string
  content: string
  likesCount: number
}

const posts: Array<PostType> = [
  { id: v4(), content: "My first post", likesCount: 3 },
  { id: v4(), content: "Need your support", likesCount: 2 },
  { id: v4(), content: "Love React", likesCount: 10 },
]

export const Posts: React.FC = () => {
  return (
    <MyPosts>
      <h2>My Posts</h2>
      <AddNewPostForm />
      { posts.map( p => {
        return <Post key={ p.id } postContent={ p.content } likesCount={ p.likesCount } />
      } ) }
    </MyPosts>
  );
};

const MyPosts = styled.section`
  article + article {
    margin-top: 10px;
  }
`
