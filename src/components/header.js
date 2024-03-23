import * as React from "react";
import { Link } from "gatsby";
import Clock from "./clock";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  padding: var(--space-4) 15vw;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: none;
  }
  background: white;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <img width="150" height="80" alt="logo" src={Logo} />
    </Link>
    <Clock />
  </StyledHeader>
);

export default Header;
