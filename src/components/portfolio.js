import React from "react";
import styled from "styled-components";
import LaptopImg from "../images/pic01.jpg";

export function Portfolio() {
  return (
         <Works>
      <Row>
        <Column s={50}>
          <img 
          style={{ maxHeight:120, margin:0}}
          src={LaptopImg}/>
        </Column>
        <Column s={70}>
          <h2
            style={{
              margin: "auto",
              color: "#f8f8f8",
              padding:"1em"
            }}
          >    

            Recent projects  
          </h2>
        </Column>
      </Row>
      <Row>  
      </Row>
    </Works>


  );
}

const Row = styled.div`
  width: 100%;
  display: flex;
`;


const Column = styled.div`
  display: flex;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.95);
  width: ${props => (props.s ? props.s + "%" : "auto")};
`;

const Works = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;
