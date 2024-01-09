import React from 'react';
import styled from "styled-components";

const navItems = ["Profile", "Messages", "News", "Music", "Settings"]

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <ul>
        {navItems.map((i, index )=> (
          <li key={index}>
            <a href="widgets/navbar/Navbar#">{i}</a>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  grid-area: nav;
  background-color: #1068d5;
`
