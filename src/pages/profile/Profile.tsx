import React from 'react';
import styled from "styled-components";
import { ProfileInfo } from "pages/profile/profileInfo/ProfileInfo";
import PostsContainer from "pages/profile/posts/PostsContainer";

export const Profile= () => {
  return (
    <StyledProfile>
      <ProfileInfo />
      <PostsContainer />
    </StyledProfile>
  );
};

const StyledProfile = styled.section`

`
