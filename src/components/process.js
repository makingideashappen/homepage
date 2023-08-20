import React from "react";
import styled from "styled-components";

export function Process() {
  return (
    <Wrap>
      <Row>
        <h2>Process</h2>
      </Row>
      <div className="desktop">
        <Row >
          <Column s={20}>
            <p>1. Describe →
            </p>
          </Column>
          <Column s={20}>
            <p>2. Design →</p>
          </Column>
          <Column s={20}>
            <p>3. Build →</p>
          </Column>
          <Column s={20}>
            <p>4. Publish →</p>
          </Column>
          <Column s={20}>
            <p>5. Feedback ↴</p>
          </Column>
        </Row>
      </div>
      <div className="mobile" >
        <Row >
          <ol>
            <li>Describe</li>
            <li>Design</li>
            <li>Build</li>
            <li>Publish</li>
            <li>Feedback</li>
          </ol>
        </Row>
        <Row>
        </Row>
      </div>   
       </Wrap>
  );
}

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Wrap = styled.div`
.desktop{
  @media (max-width: 800px) {
    display:none;
  }  
}
  .mobile{
    @media (min-width: 800px) {
      display:none;
    }  
  }
  ol {
    font-weight:bold;
  }
  `

const Column = styled.div`
  border: 2px solid black;
  p {
    margin: auto;
    color: black;
  }
  display: flex;
  margin: 10px;
  display: flex;
  min-height: 100px;
  width: ${props => (props.s ? props.s + "%" : "100%")};
`;



