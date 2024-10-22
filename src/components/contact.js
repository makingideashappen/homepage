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
    flex-direction: column;
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
  padding: 1em;
  width: ${(props) => (props.s ? props.s + "%" : "auto")};
  @media (max-width: 800px) {
    width: auto;
  }
`;

const StyledLink = styled.a`
  width: 100%;
  height: 100%;
  margin: 1rem;
  div {
    width: 100%;
    height: 100%;
    margin: 0;
    height: 120px;
    text-align: center;
  }
`;

export default function Contact() {
  return (
    <Wrapper>
      <div>
        <Row>
          <h2>Business development service for your next idea.</h2>{" "}
        </Row>
      </div>
      <h3>
        If you wish a <span>potential partner </span>, or you are looking for{" "}
        <span>technical contact for your project </span>
        , feel free to contact me.
        <br />
        Let's work together!
      </h3>
      <Row>
        <StyledLink href={`/contact/#project`}>
          <Column s={50}>
            <h2>Work on your project </h2>
          </Column>
        </StyledLink>
        <StyledLink href={`/contact/#research`}>
          <Column s={50}>
            <h2>Research topic of your interest </h2>
          </Column>
        </StyledLink>
      </Row>
    </Wrapper>
  );
}
