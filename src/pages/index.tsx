import * as React from "react";
import { PageProps, Link, graphql, HeadFC } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import { Process } from "../components/process";
import { Benefits } from "../components/benefits";
import Contact from "../components/contact";
import { Portfolio } from "../components/portfolio";
import Footer from "../components/footer";
// import Shape1 from "../images/Vector1.svg";
// import Shape2 from "../images/Vector4.svg";
import Clock from "../components/clockAlt";
import Man from "../images/man.svg";

import Form from "../components/form";
// import Morph from "../components/morph"

const links = [
  {
    text: "LinkedIn update",
    url: "https://www.linkedin.com/in/kris-krysiak-3aa83297/",
    description: "Proffesional network connection.",
  },
  {
    text: "Youtube",
    url: "https://www.youtube.com/@makin_ideas_happen",
    description: "Get connected on video level.",
  },
  // {
  //   text: "Other Companies",
  //   url: "brands",
  //   description: "Private brands.",
  // },
  // {
  //   text: "Interesting links",
  //   url: "interesting-links",
  //   description:
  //     "An updated list of interesting links to broden knowledge about technology business and enviroment.",
  // },
];

const samplePageLinks = [
  {
    text: "About",
    url: "about",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "Services", url: "services" },
  { text: "Portfolio", url: "portfolio" },
  // { text: "Blog", url: "blog" },
  // { text: "Inquiry", url: "contact" },
];

type DataProps = {
  site: {
    buildTime: string;
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, location }) => (
  <Layout>
    <div className={styles.hero}>
      <div className={styles.decoration}>
        <img width="200" alt="man" src={Man} />
      </div>
      <div className={styles.info}>
        <h1>
          Welcome to <br />
          <b>Making Ideas Happen</b>
        </h1>
        <p className={styles.intro}>
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link style={{ fontSize: "1.2rem" }} to={link.url}>
                {link.text}
              </Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
        </p>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.url} className={styles.listItem}>
              <span
                style={{
                  background:
                    "linear-gradient(45deg,blue,var(--color-primary))",
                  padding: "6px 0",
                }}
              >
                <a
                  className={styles.listItemLink}
                  rel="noopener"
                  target="_blank"
                  href={`${link.url}`}
                >
                  {link.text} ↑
                </a>
              </span>
              <p className={styles.listItemDescription}>{link.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
    <Process />
    <Benefits />
    <Contact />
    <a href={`services`}>
      <b>Read more ↑</b>
    </a>
    <br />
    <a href={`/portfolio`}>
      <Portfolio />
    </a>
    <br />
    <center></center>
    <Form hash={location.hash.substring(1)} />
    <br />
    <code>Ask and I will be happy to answear! 📧🚀💪</code>
    <Footer />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
