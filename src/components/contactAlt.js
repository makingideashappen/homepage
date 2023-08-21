import React from "react";
import Homepage from "../../images/homepage.svg";
import Link from "gatsby-link";
import recruitment from "../../images/recruitment.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

export function Contact() {
  return (
    <Wrapper>
      <div
      // style={{ color: Section === "Contact" && "Tomato" }}
      // className={Section === "Contact" ? "transition-fade" : ""}
      >
        <Row>
          <h2>Web development service for your next idea.</h2>
        </Row>
      </div>
      <h3>
        If you wish a 
        <span style={{ borderBottom: "2px solid black" }}>new website </span>,
        or you are looking for 
        <span style={{ borderBottom: "2px solid black" }}>
          front-end developer for your project 
        </span>
        , feel free to contact me.
        <br />
        Let's work together!
      </h3>
      <Row>
        <Column s={50}>
          <h2>Build a personal website</h2>
        </Column>
        <Column s={50}>
          <h2>Build a frontend aplication</h2>
        </Column>
      </Row>
      {/* <div className="Gallery contact">
        <figure className="Gallery--Item">
          <div>
            <img src={Homepage} alt="recruitment" />
          </div>
          <Link className="container center" to="/contact/order-website">
            <button className="shadow">I wish a website for my business</button>
          </Link>
        </figure>
        <figure className="Gallery--Item">
          <div>
            <img src={recruitment} alt="recruitment" />
          </div>
          <Link className="container center" to="/contact/recruitment">
            <button className="shadow">I am recruiter</button>
          </Link>
        </figure>
      </div> */}
    </Wrapper>
  );
}

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  h2 {
    color: black;
    margin: auto;
  }
  border: 2px solid black;
  margin: 1em;
  display: flex;
  height: 200px;
  display: flex;
  min-height: 100px;
  width: ${props => (props.s ? props.s + "%" : "auto")};
`;
