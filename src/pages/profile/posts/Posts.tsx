import React from 'react';
import styled from "styled-components";
import { Post } from './post/Post';
import { AddNewItemForm } from "components/addNewItemForm/AddNewItemForm";
import { PostType } from "redux/profileReducer";

type PostsPropsType = {
  posts: PostType[]
}

export const Posts: React.FC<PostsPropsType> = ({posts}) => {
  return (
    <MyPosts>
      <h2>My Posts</h2>
      <AddNewItemForm btnTitle={"add new post"} />
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
