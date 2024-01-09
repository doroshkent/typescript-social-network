import React from 'react';
import styled from "styled-components";
import avatar from "assets/img/photo.webp"
import { Posts } from "pages/profile/posts/Posts";

export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <Description>
        <img src={ avatar } alt="profile" />
        <MainInfo>
          <h1>Anastasiya</h1>
          and another info
        </MainInfo>
      </Description>
      <Posts />
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
