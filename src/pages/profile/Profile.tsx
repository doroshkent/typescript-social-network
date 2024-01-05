import React from 'react';
import styled from "styled-components";
import avatar from "assets/img/photo.webp"

export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Description>
        <img src={avatar} alt="profile"/>
        <MainInfo>
          <h1>Anastasiya</h1>
          and another info
        </MainInfo>
      </Description>
      <MyPosts>
        <AddPostForm>
          add new post
        </AddPostForm>
        <Post>
          post 1
        </Post>
        <Post>
          post 2
        </Post>
        <Post>
          post 3
        </Post>
      </MyPosts>
    </StyledProfile>
  );
};

const StyledProfile = styled.section`
  grid-area: content;
  background-color: #b8d9c8;
`

const Description = styled.section`
  img {
    height: 200px;
  }
`

const MainInfo = styled.div`
  
`

const MyPosts = styled.section`
  
`

const AddPostForm = styled.form`

`

const Post = styled.article`

`
