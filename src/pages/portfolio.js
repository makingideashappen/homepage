import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"


const Portfolio = ( ) => {
  return (
    <Layout>
      <h1>
        Portfolio
      </h1>
      <h2>
        Sample of recent works
      </h2>
      
      <h3>Mockups of websites</h3>
      <div>
      <StaticImage
        alt="artg"
        placeholder="blurred"
        width={300}
        height={650}
        src="../images/portfo_windows.png"
        />
        <StaticImage
        alt="artg"
        placeholder="blurred"
        width={300}
        height={650}
        src="../images/portfo_park.jpg"
        />
      <StaticImage
        alt="artg"
        placeholder="blurred"
        width={400}
        height={300}
        src="../images/portfo_hb.png"
        />
      </div>
      <p>
      <h3>Logos for branding</h3>
      <code>Soon to be updated</code>
      <h3>Paintings and handmade</h3>
      <code>Soon to be updated</code>
      </p>
      <br/><br/>
      <Link to="/"> ← Return</Link>
    </Layout>
  )
}


export default Portfolio
