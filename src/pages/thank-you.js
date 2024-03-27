import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import styled from "styled-components";

const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ThankYouMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const NotFoundPage = () => (
  <Layout>
    <ThankYouWrapper>
      <ThankYouMessage>Thank you for contacting us!</ThankYouMessage>
      <ThankYouMessage>We'll get back to you soon.</ThankYouMessage>
    </ThankYouWrapper>
    <Link to="/"> ← Return</Link>
  </Layout>
);

export const Head = () => <Seo title="Thank You" />;

export default NotFoundPage;
