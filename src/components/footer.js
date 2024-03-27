import React from "react";
import Logo from "../images/logo.svg";

export default function Foooter() {
  return (
    <footer
      id="footer"
      style={{
        margin: "auto",
        borderTop: "1px solid black",
        marginTop: 150,
        paddingBottom: 30,
      }}
      className="site-foot"
    >
      <section>
        <br />
        <br />
        <dl className="alt">
          <dt>Email</dt>
          <dd>
            <a href="mailto:makingideashappen@protonmail.com">
              makingideashappen@protonmail.com
            </a>
          </dd>
        </dl>
      </section>
      <section
        style={{
          display: "flex",
        }}
      >
        <dt
          style={{
            marginRight: "1em",
          }}
        >
          Socials
        </dt>
        <dd>
          <a
            href="https://www.linkedin.com/in/kris-krysiak-3aa83297/"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "1em",
            }}
          >
            <span> </span> LinkedIn
          </a>
        </dd>
        {/* <dd>
          <a
            href="https://github.com/krs2000"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "1em",
            }}
          >
            <span className="label"> GitHub</span>
          </a>
        </dd> */}
        <dd>
          <a
            href="https://www.youtube.com/@makin_ideas_happen"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label"> Youtube</span>
          </a>
        </dd>
      </section>

      <center>
        <img width="150" height="80" alt="logo" src={Logo} />
      </center>
      <center>{new Date().getFullYear()}</center>
    </footer>
  );
}
