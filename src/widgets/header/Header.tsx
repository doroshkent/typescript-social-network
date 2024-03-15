import React from 'react';
import styled from "styled-components";
import { Logo } from "components/logo/Logo";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Header: React.FC<HeaderProps> = ({isAuth}) => {
  return (
    <StyledHeader>
      <Logo />
      <Link to={'/login'} >
        <Button>
          {isAuth ? <LogoutOutlined rev={ undefined } /> : <LoginOutlined rev={undefined} />}
        </Button>
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8cbdde;
  grid-area: header;
`

// types
type HeaderProps = {
  isAuth: boolean
}
