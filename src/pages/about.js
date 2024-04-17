import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Profile2 from "../images/profile2.jpg";
import styled from "styled-components";
import Timeline from "../components/shared/timeline";

const Wrapper = styled.div`
  h3 {
    text-transform: uppercase;
    font-weight: bolder;
    font-family: Arial Black;
    font-size: 34px;
    mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/19085/grit.png);
    color: darkred;
  }

  .content {
    width: 600px;
    margin: 5% auto;
    position: relative;
  }

  .avatar {
    float: left;
    width: 200px;
    border: 15px solid transparent;
    shape-margin: 1rem;
    margin-left: -15px;
  }
  @media (max-width: 800px) {
    display: block;
    .content {
      width: auto;
    }
    .avatar {
      float: left;
      width: 35vw;
    }
  }
`;
const items = [
  {
    company: "Freelancer",
    time: "2022 - present",
    description:
      "Currently working freelance making websites nad reserching new technology!",
    float: "right", // or 'left' for alternating sides
    backgroundColor: "rgb(248,248,248)",
    flagColor: "rgb(255,80,80)",
    timeColor: "rgb(250,80,80)",
  },
  {
    company: "Allbright.io",
    time: "2021 - 2022",
    description:
      "Working on several projects including : Captio.io (P2P video chats with subtitles) , Medrefer (hospital scheduling app) and landing pages done in Gatsby.",
    float: "left", // or 'right' for alternating sides
    backgroundColor: "rgb(248,248,248)",
    flagColor: "rgb(255,80,80)",
    timeColor: "rgb(250,80,80)",
  },
  {
    company: "Freelance",
    time: "2008 - 2011",
    description:
      "Updating technology stack. Cooperating with local developers community. Working with a startup Hash-back empowering crypto culture.",
    float: "right", // or 'left' for alternating sides
    backgroundColor: "rgb(248,248,248)",
    flagColor: "rgb(255,80,80)",
    timeColor: "rgb(250,80,80)",
  },
  {
    company: "Inwedo",
    time: "2019",
    description:
      "My first employer where was working with Angular and C# backend software. Was responsible for frontend maintainance and development including HelloHere app (airbnb extension) and other app for housing market",
    float: "left", // or 'right' for alternating sides
    backgroundColor: "rgb(248,248,248)",
    flagColor: "rgb(255,80,80)",
    timeColor: "rgb(250,80,80)",
  },
  {
    company: "Technical University of Lodz",
    time: "2008 - 2011",
    description:
      "Obtainnig master of engeenering doble diploma both in polish and english. Studying in Poland and Spain.",
    float: "right", // or 'left' for alternating sides
    backgroundColor: "rgb(248,248,248)",
    flagColor: "rgb(255,80,80)",
    timeColor: "rgb(250,80,80)",
  },
];

const SecondPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h2>A few words about author...</h2>
      <Wrapper>
        <div class="content">
          <img className="avatar" src={Profile2} alt="Avatar" />
          <p>
            Meet Kris, a professional with a business management, technology
            background.
          </p>
          <p>
            He used to work with <b>IT, sales and product development</b>.
            Recent years has been working with own company.{" "}
          </p>
          <p>
            Before that was working on several professional projects. The main
            purpose of this webpage is to find a potential partner or employer.
          </p>
        </div>
        <br />
        <br />
        <Timeline items={items} />
        <div class="content">
          <code>Always looking for interesting oportunities!</code>
        </div>
      </Wrapper>
      <br /> <br />
      <p></p>
      <Link to="/"> ← Return</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default SecondPage;
