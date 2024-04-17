import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"
import { Benefits } from '../components/benefits'
import { Process } from '../components/process'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Intro } from '../components/intro'
import Ishikawa from  "../images/ishikawa.png"
import MarketingSlogan from "../components/MarketingSlogan";

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <Layout>
      <Intro >  Everything begins with an idea.
              <br />
              Make it happen with beautiful website.</Intro>
    <Benefits />
    <Process />
    <br /><br />
    <h1>
      All the best <b>at your service</b>
    </h1>
    <p>
      <h2><code>Webdevelopment Stack:</code></h2>
      <p>The preferable frontend stack consist of newest and flexible solutions that are optimized to highest standards:</p>
      <h3>Affinity</h3>
      <p>Award-winning photo editing, graphic design and page layout software for Mac, Windows & iPad.</p>
      <h3>React & Gatsby </h3>
      <p>Enables developers to build fast, secure, and powerful websites using a React-based framework and innovative data layer that makes integrating different content, APIs, and services into one web experience incredibly simple.</p>
      <h3>Sanity CMS</h3>
      <p>CMS of choice, powerful tool to make a serveless backend.</p>
      <h3>Node.js & Typescript</h3>
      <p>Node.js® is an open-source, cross-platform JavaScript runtime environment.</p>
      <h3>Python & Django backend</h3>
      <p>Django backend is a top choice for apps and can also be used as a powerful CMS.</p>
      <h3>Netlify & AWS</h3>
      <p>All your tools. All your data. Together. With first-class support for every modern web framework and a broad ecosystem of API integrationsAll your tools. All your data. Together. With first-class support for every modern web framework and a broad ecosystem of API integrations</p>
      <h3>For more costume preferences technical details need to be provided so that outcome satisfy any needs.</h3>
    </p>
    <h2><code>Research Methods</code></h2>
    <p></p>
    <p>If there is a anything to solve, probably there is either existing pattern for a solution or an inspirration to find a proper way.</p>
<ul>
<li>
Research for marketing purpouse 
  </li>
<li>
Problem to solution approach
  </li>
  <li>
  Web research on popular engines and networks
  </li>
  <li>
   Observations and historical research in books or pieces
  </li>
  <li>
    Surveys and people research
  </li>
</ul>
    <br></br>
    <img style={{maxWidth:400}}  src={Ishikawa} />
  <p><code>Pic 1. Ishikawa diagram is one of the tools used in research</code></p> 
  <MarketingSlogan /> 
<br/><br/><br/><br/>


    <Link to="/"> ← Return</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
