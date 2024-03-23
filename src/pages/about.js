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
    width: 150px;
    border: 15px solid transparent;
    border-radius: 100%;
    shape-outside: content-box;
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
          <h3>Kris K.</h3>
          <img
            className="avatar"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/19085/round-avatar.png"
            alt="Avatar"
          />
          <p> Hello I am professional with a technology background.</p>
          <p>
            My main interest are various, from broadly understood business to IT
            and sales, product development, housing industry and well-being.
          </p>

          <p>Recent years I have been working with my own company</p>

          <p>Before that was working on several professional projects.</p>
        </div>
      </Wrapper>
      <br />
      <br />
      <Link to="/"> ← Return</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
