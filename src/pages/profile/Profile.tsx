import React from 'react';
import styled from "styled-components";
import { Posts } from "pages/profile/posts/Posts";
import { ProfileInfo } from "pages/profile/profileInfo/ProfileInfo";
import { ProfileStateType } from "redux/state";

type ProfilePropsType = {
  state: ProfileStateType
}

export const Profile: React.FC<ProfilePropsType> = ({ state }) => {
  return (
    <StyledProfile>
      <ProfileInfo />
      <Posts posts={ state.posts } />
    </StyledProfile>
  );
};

const StyledProfile = styled.section`

`
