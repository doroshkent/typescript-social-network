import React from 'react';
import styled from "styled-components";
import logo from 'assets/img/logo.svg'

export const Logo: React.FC = () => {
  return (
    <LogoLink>
      <LogoImg src={ logo }/>
    </LogoLink>
  );
};

const LogoLink = styled.a`

`

const LogoImg = styled.img`
  height: 75px;
`
