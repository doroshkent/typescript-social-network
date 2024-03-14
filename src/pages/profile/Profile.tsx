import React from 'react';
import styled from "styled-components";
import { ProfileInfo } from "pages/profile/profileInfo/ProfileInfo";
import PostsContainer from "pages/profile/posts/PostsContainer";
import { ProfileProps } from "pages/profile/ProfileContainer";

export const Profile= (props: ProfileProps) => {
  return (
    <StyledProfile>
      <ProfileInfo {...props} />
      <PostsContainer />
    </StyledProfile>
  );
};

const StyledProfile = styled.section`

`
