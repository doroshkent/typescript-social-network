import React from 'react';
import { v1 } from "uuid";
import { S } from "./Navbar_Styles"

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
    <S.Navbar>
      <ul>
        { navItems.map( (i) => (
          <li key={ i.id }>
            <S.Link to={i.href}>{ i.title }</S.Link>
          </li>
        ) ) }
      </ul>
    </S.Navbar>
  );
};
