import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Gallery from "../components/gallery";
import Img1 from "../images/portfo_windows.png";
import Img2 from "../images/portfo_park.jpg";
import Img3 from "../images/portfo_hb2.png";
import Img4 from "../images/portfo_hb.png";

const Portfolio = () => {
  // Define portfolio items (image, title, description)
  const portfolioItems = [
    {
      image: Img1,
      title: "My view windows",
      description:
        "Website for proffesional windows replacement company. React and Sanity CMS",
    },
    {
      image: Img2,
      title: "Playday",
      description: "Website for distributor and assembly playgrounds",
    },
    {
      image: Img3,
      title: "Hashback web",
      description: "BTC Kantor website",
    },
    {
      image: Img4,
      title: "Hashback PWA",
      description: "BTC Kantor PWA",
    },
    // Add more items here
  ];

  return (
    <Layout>
      <h1>Portfolio</h1>
      <h2>Sample of recent works</h2>
      <h3>Mockups of websites</h3>
      <div>
        <Gallery items={portfolioItems} />
      </div>
      <p>
        <h3>Logos for branding</h3>
        <code>Soon to be updated</code>
        <h3>Paintings and handmade</h3>
        <code>Soon to be updated</code>
        <h3>Private brands</h3>
        <a href="/brands">✨Brands page for check✨</a>
      </p>
      <br />
      <br />
      <Link to="/"> ← Return</Link>
    </Layout>
  );
};
export const Head = () => <Seo title="Portfolio" />;

export default Portfolio;
// import React from "react";

// const App = () => {
//   // Define portfolio items (image, title, description)
//   const portfolioItems = [
//     {
//       image: "https://via.placeholder.com/300",
//       title: "Project 1",
//       description: "This is a description of Project 1",
//     },
//     {
//       image: "https://via.placeholder.com/300",
//       title: "Project 2",
//       description: "This is a description of Project 2",
//     },
//     {
//       image: "https://via.placeholder.com/300",
//       title: "Project 3",
//       description: "This is a description of Project 3",
//     },
//     // Add more items here
//   ];

//   return (
//     <div className="app">
//       <h1>My Portfolio</h1>
//       <Gallery items={portfolioItems} />
//     </div>
//   );
// };

// export default App;
