import * as React from "react"
import { Link } from "gatsby"
import Clock from './clock'
import styled from "styled-components"

const StyledHeader = styled.header`
margin: 0 auto;
padding: var(--space-4) var(--size-gutter);
display: flex;
alignItems: center;
justifyContent: space-between;

@media (max-width: 800px) {
  display:none;
}

`


const Header = ({ siteTitle }) => (
  <StyledHeader>
        <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <Clock/>
  </StyledHeader>
)

export default Header
