import * as React from "react"
import Homepage from "../images/homepage.svg";

import Layout from "../components/layout"
import Seo from "../components/seo"

const old = [
  {
    name: "Tony Robbins",
    link: "https://www.youtube.com/@TonyRobbinsLive"
  },
  {
    name: "Tim ferris",
    link: "https://www.youtube.com/@timferriss"
  }, {
    name: "Kanye West",
    link: "https://www.youtube.com/@kanyewest"
  }, {
    name: "Nas",
    link: "https://www.youtube.com/@nas1205"
  }, {
    name: "Elon Musk",
    link: "https://twitter.com/elonmusk"
  }, {
    name: "Tony Robbins",
    link: "https://www.youtube.com/@TonyRobbinsLive"
  }, {
    name: "Penelope Cruz",
    link: "https://www.instagram.com/penelopecruzoficial/"
  }, {
    name: "Joe Rogan",
    link: "https://www.youtube.com/@joerogan"
  }
]

const peopleToFollow = [
  {
    name: "Tony Robbins - author of bestsellers, businessman",
    link: "https://www.youtube.com/@TonyRobbinsLive"
  },
  {
    name: "Tim ferris - motivational coatch, dancer",
    link: "https://www.youtube.com/@timferriss"
  }, {
    name: "Kanye West - musician, fashion artist",
    link: "https://www.youtube.com/@kanyewest"
  }, {
    name: "Nas - musician, actor",
    link: "https://www.youtube.com/@nas1205"
  }, {
    name: "Elon Musk - inventor,  businessman",
    link: "https://twitter.com/elonmusk"
  }, {
    name: "Penelope Cruz - actress, public person",
    link: "https://www.instagram.com/penelopecruzoficial/"
  }, {
    name: "Joe Rogan - sportsman, public speaker",
    link: "https://www.youtube.com/@joerogan"
  }
]

//sth to learn language
//sth interesting profesional

const NotFoundPage = () => (
  <Layout>
    <h1>Interesting links</h1>
      <h2>Peple to follow</h2>
      <ul>
      {peopleToFollow.map(({name,link})=> <li key={name}><a target="_blank" href={link}>{name}</a></li>)}
      </ul>
      <code>soon more interesting links</code>
      <img style={{maxWidth:"10vw"}} src={Homepage} alt="recruitment" />{" "}

  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
