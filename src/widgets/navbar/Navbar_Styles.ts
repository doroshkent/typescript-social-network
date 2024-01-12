import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = styled.nav`
  grid-area: nav;
  background-color: #1068d5;
  padding: 20px;
`

const Link = styled(NavLink)`
  &.active {
    color: gold;
  }
`

export const S = {
  Navbar,
  Link,
}
