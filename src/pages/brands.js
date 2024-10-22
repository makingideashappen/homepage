import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <h1>Private Brands</h1>
    <code>Other businesses in develop</code>
    <h2>Human Cause</h2>
    <p>Human rights activism social media and dedicated platform</p>
    <p>
      <a href={`https://www.instagram.com/human_cause/`}>Instagram</a>
    </p>
    <p>
      <a href={`https://x.com/HumanCauseX`}>X platform</a>
    </p>
    <p>
      <code>Planned relase of webpage araund 01.11.2024 </code>
    </p>
    <p>Human rights activism social media and webpage soon relase</p>
    <h2>Place 2024</h2>
    <p>White label marketplace for creators (React , Django)</p>
    <p>
      <code>In progress</code>
    </p>
    <h2>Voodpecker eyewear </h2>
    <p>
      Eco fashion brand established in 2014, currently waiting for more suitable
      times or business partnership for reactivation.
    </p>
    <p>
      <a href={`https://www.facebook.com/Voodpecker.eyewear`}>facebook page</a>
    </p>
    <a href={`https://www.instagram.com/voodpecker_apparel/`}>Instagram</a>
    <h2>Love peace med</h2>
    <p>Nishe natural nutrition for well-being. CBD tea concept tea.</p>
    <p>
      <a href={`https://www.facebook.com/profile.php?id=100091845867824`}>
        facebook page
      </a>
    </p>
    <a href={`https://www.instagram.com/Lovepeacemed/`}>Instagram</a>
    <p>
      <Link to="/"> ← Return</Link>
    </p>
  </Layout>
);

export const Head = () => <Seo title="Brands" />;

export default NotFoundPage;
