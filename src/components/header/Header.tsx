import React from 'react';
import styled from "styled-components";
import { Logo } from "components/logo/Logo";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #8cbdde;
  grid-area: header;
`
