import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>Private Brands</h1>
    <code>Other businesses in develop</code>
    <h2>Voodpecker eyewear</h2>
    <p>Eco fashion brand established in 2014, currently waiting for more suitable times or business partnership for reactivation.</p>
   <p>
   <a href={`https://www.facebook.com/Voodpecker.eyewear`}
    >facebook page</a></p>
  <p>Instagram: @voodpecker_apparel</p>
    <h2>Love peace med</h2>
    <p>Nishe natural nutrition regional tea for well-being. Natural medicine for people.</p>
    <p> 
    <a
      href={`https://www.facebook.com/profile.php?id=100091845867824`}
    >  facebook page</a></p>
    <p>Instagram: @Lovepeacemed</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
