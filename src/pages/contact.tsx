// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Intro } from '../components/intro'
import Form from "../components/form"
import { useLocation } from "@reach/router";

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
    <Intro />
    <Form hash={  location.hash.substring(1)
}/>
    <br /><br />
    <Link to="/"> ← Return</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Contact" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
