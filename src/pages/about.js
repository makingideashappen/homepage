import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Profile1 from "../images/profile1.jpg";
import Profile2 from "../images/profile2.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
display:flex;
article{
max-width:50%;
margin-right:20px;
}
.images{
  align-items:flex-end;
display:flex;
justify-content:center;
flex-direction:column;
.profilePic1{
}
.profilePic2{
}
`;

const SecondPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h2>A few words about author</h2>
      <Wrapper>
        <article>
          Hello I am professional with a technology background.
          <p>
            My main interest are various, from broadly understood business to IT
            and sales, product development, housing industry and well-being.
          </p>
          <br />
          <p>Recent years I have been working with my own company.</p>
          <p> Before that was working on several professional projects.</p>
          <br />
        </article>
        <div className="images">
          {/* <img
            width="200px"
            alt="profile"
            src={Profile1}
            classname="profilePic1"
          /> */}
          <img width="200px" alt="profile" src={Profile2} />
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
