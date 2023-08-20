import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 800px) {
flex-direction:column 
 }  
`;

const Column = styled.div`
  h2 {
    color: black;
    margin: auto;
  }
  border: 2px solid black;
  margin: 1em;
  display: flex;
  max-height: 200px;
  display: flex;
  min-height: 100px;
  padding:1em;
  width: ${props => (props.s ? props.s + "%" : "auto")};
  @media (max-width: 800px) {
width:auto;
     }  
`;


export default function Contact() {
  return (
    <Wrapper>
      <div
      >
        <Row>
          <h2>Business development service for your next idea.</h2>{" "}
        </Row>
      </div>
      <h3>
        If you wish a{" "}
        <span >potential partner </span>,
        or you are looking for{" "}
        <span >
          technical contact for your project{" "}
        </span>
        , feel free to contact me.
        <br />
        Let's work together!
      </h3>
      <Row>
        <Column s={50}>
          <h2>Work on your project </h2>
        </Column>
        <Column s={50}>
          <h2>Research topic of your interest </h2>
        </Column>
      </Row>
    </Wrapper>
  );
}
