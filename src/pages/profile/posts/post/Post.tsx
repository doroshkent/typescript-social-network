import React from 'react';
import styled from "styled-components";
import avatar from "assets/img/photo.webp";
import { FlexWrapper } from 'components/FlexWrapper';

type PostPropsTypes = {
  postContent: string
  likesCount: number
}

export const Post: React.FC<PostPropsTypes> = ({ postContent, likesCount }) => {
  return (
    <StyledPost>
      <FlexWrapper $align="center" $gap="5px">
        <ProfilePhoto src={ avatar } />
        <p>{ postContent }</p>
      </FlexWrapper>
      <span>{ likesCount } likes</span>
    </StyledPost>
  );
};

const StyledPost = styled.article`

`

const ProfilePhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`
