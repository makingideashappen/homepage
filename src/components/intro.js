import React from "react";
import styled from "styled-components";
// import Bulb from "../../images/Bulb.svg";
// import SpinnerImg from "../../images/Spinner.svg";
// import Letters from "../../images/letters.svg";
import Logo from "../images/logo.svg";

export function Intro({ children }) {
  return (
    <Wrapper style={{ display: "flex" }}>
      <Row>
        <Column w={30}>
          <h1
            style={{
              height: "auto",
              color: "#f8f8f8",
            }}
          >
            <span
              style={{
                background: "rgba(0, 0, 0, 0.95)",
                padding: "6px 0",
              }}
            >
              {children}
            </span>
          </h1>
        </Column>
        <Column>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "240px",
              height: "140px",
              marginTop: "auto",
              marginLeft: "auto",
            }}
          />
          {/* <div
            style={{
              position: "relative",
              width: "50vw",
              justifySelf: "flex-end",
              alignSelf: "center"
            }}
          >
            <img src={Bulb} style={{ position: "absolute" }} />
            <Spinner src={SpinnerImg} style={{ position: "absolute" }} />
            <img src={Letters} style={{ position: "absolute" }} />
          </div> */}
        </Column>
        <Column w={70}></Column>
      </Row>
    </Wrapper>
  );
}

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  display: flex;
  min-height: 100px;
  width: ${(props) => (props.s ? props.s + "%" : "auto")};
`;

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
`;

// const Spinner = styled.img`
//   height: 8vw;
//   margin: 3.5vw 2.8vw;
//   @media screen and (max-width: 750px) {
//     height: 18vw;
//     margin: 7vw 5.7vw;
//   }
//   -webkit-animation-name: spin;
//   -webkit-animation-duration: 7000ms;
//   -webkit-animation-iteration-count: infinite;
//   -webkit-animation-timing-function: linear;
//   -moz-animation-name: spin;
//   -moz-animation-duration: 7000ms;
//   -moz-animation-iteration-count: infinite;
//   -moz-animation-timing-function: linear;
//   -ms-animation-name: spin;
//   -ms-animation-duration: 7000ms;
//   -ms-animation-iteration-count: infinite;
//   -ms-animation-timing-function: linear;
//   animation-name: spin;
//   animation-duration: 7000ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;

//   @-ms-keyframes spin {
//     from {
//       -ms-transform: rotate(0deg);
//     }
//     to {
//       -ms-transform: rotate(360deg);
//     }
//   }
//   @-moz-keyframes spin {
//     from {
//       -moz-transform: rotate(0deg);
//     }
//     to {
//       -moz-transform: rotate(360deg);
//     }
//   }
//   @-webkit-keyframes spin {
//     from {
//       -webkit-transform: rotate(0deg);
//     }
//     to {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
