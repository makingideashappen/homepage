/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `0 var(--size-gutter) var(--size-gutter) var(--size-gutter)`,
        }}
      >
        <main>{children}</main>

        <footer
          style={{
            padding: `var(--space-3)`,
            fontSize: `var(--font-sm)`,
            background: "white",
          }}
        >
          <a style={{ marginRight: "1rem" }} href="/privacy-policy">
            Privacy policy
          </a>
          <a href="/cookie-policy">Cookie policy</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
