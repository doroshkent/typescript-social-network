import React from 'react';
import { S } from "./Navbar_Styles";
import { NavItemsType } from "redux/sidebarReducer";

type NavbarPropsType = {
  navItems: NavItemsType[]
}

export const Navbar: React.FC<NavbarPropsType> = ({navItems}) => {
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
