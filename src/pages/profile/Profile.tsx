import React from 'react';
import styled from "styled-components";
import { Posts } from "pages/profile/posts/Posts";
import { ProfileInfo } from "pages/profile/profileInfo/ProfileInfo";

export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <ProfileInfo />
      <Posts />
    </StyledProfile>
  );
};

const StyledProfile = styled.section`

`
