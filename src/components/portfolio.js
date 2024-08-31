import React from "react";
import styled from "styled-components";
import Chip from "../images/chip.png";

export function Portfolio() {
  return (
    <Works>
      <Row>
        <Column s={20}>
          <img
            alt="decoration"
            style={{
              maxHeight: 100,
              marginTop: 20,
              filter: "brightness(0) invert(1)",
              minWidth: 100,
            }}
            src={Chip}
          />
        </Column>
        <Column s={80}>
          <h2
            style={{
              margin: "auto",
              color: "line",
              padding: "1em",
              paddingLeft: 60,
            }}
          >
            <span style={{ textDecoration: "underline" }}>
              Recent projects{" "}
            </span>
          </h2>
        </Column>
      </Row>
      <Row></Row>
    </Works>
  );
}

const Row = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, blue, var(--color-primary));
`;

const Column = styled.div`
  padding-left: 20px;
  display: flex;
  min-height: 100px;
  width: ${(props) => (props.s ? props.s + "%" : "auto")};
  color: white;
`;

const Works = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;
