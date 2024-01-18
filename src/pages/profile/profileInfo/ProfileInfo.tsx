import React from 'react';
import avatar from "assets/img/photo.webp";
import styled from "styled-components";

export const ProfileInfo = () => {
  return (
    <Description>
      <img src={ avatar } alt="avatar" />
      <MainInfo>
        <h1>Anastasiya</h1>
        and another info
      </MainInfo>
    </Description>
  );
};

const Description = styled.section`
  img {
    height: 200px;
  }
`

const MainInfo = styled.div`

`
