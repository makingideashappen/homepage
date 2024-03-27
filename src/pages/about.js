import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Profile2 from "../images/profile2.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  // display:flex;
  // article{
  // max-width:50%;
  // margin-right:20px;
  // }
  // .images{
  //   align-items:flex-end;
  // display:flex;
  // justify-content:center;
  // flex-direction:column;
  // .profilePic1{
  // }
  // .profilePic2{
  // }
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
`;

const SecondPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h2>A few words about author</h2>
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
      </Wrapper>
      <br /> <br />
      <p></p>
      <Link to="/"> ← Return</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default SecondPage;
