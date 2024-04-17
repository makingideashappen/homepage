import React from "react";
import styled from "styled-components";
import { Button } from "./shared/button";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 70px;
    max-width: 800px;
    line-height: 1;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: #021123;
  }

  p {
    font-size: 24px;
    max-width: 500px;
    text-align: center;
    color: #021123;
  }

 

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      padding: 0 20px;
    }
  }
`;

const Blob = ({ className }) => {
  return (
    <>
      <Hero>
        <h2>Make imposible - posible</h2>
        <p>By adding experinced researcher to your team</p>
        <Button>
          <a href="/contact/#research" rel="noopener noreferrer">
            {/* SVG code */}
            Ask for resarch
          </a>
        </Button>
      </Hero>
    </>
  );
};

export default Blob;
