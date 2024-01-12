import React from 'react';
import styled from "styled-components";
import { v1 } from "uuid";

type NavItemsType = {
  id: string
  title: string
  href: string
}

const navItems: Array<NavItemsType> = [
  {
    title: "Profile",
    id: v1(),
    href: "/profile"
  },
  {
    title: "Messages",
    id: v1(),
    href: "/dialogs"
  },
  {
    title: "News",
    id: v1(),
    href: "/news"
  },
  {
    title: "Music",
    id: v1(),
    href: "/music"
  },
  {
    title: "Settings",
    id: v1(),
    href: "/settings"
  }
];

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <ul>
        { navItems.map( (i) => (
          <li key={ i.id }>
            <a href={i.href}>{ i.title }</a>
          </li>
        ) ) }
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  grid-area: nav;
  background-color: #1068d5;
`
