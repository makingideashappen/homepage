import React from "react";
import Webdev from "../images/webdev.svg";
import Graphics from "../images/graphic.svg";
import uiux from "../images/uiux.svg";
import styled from "styled-components";
import Spinner from "../images/spinner.svg"

export function Benefits() {
  return (
    <Skills>
      <div>
        <h2>Web development service for your next idea.</h2>{" "}
      </div>
      <div className="Gallery">
         <figure className="Gallery--Item">
          <div>
            <img className="skill" src={Spinner} alt={"sds"} />
          </div>
          <figcaption>Business development</figcaption>
          <figcaption>
          <code> Business administration and development</code> 
          </figcaption>
        </figure>
        <figure className="Gallery--Item">
          <div>
            <img className="skill" src={Webdev} alt={"sds"} />
          </div>
          <figcaption>Front-end development</figcaption>
          <figcaption><code> Building websites and interfaces</code></figcaption>
        </figure>
        <figure className="Gallery--Item">
          <div>
            <img className="skill" src={uiux} alt={"sds"} />
          </div>
          <figcaption>UI/UX design</figcaption>
          <figcaption>
          <code>  Video production company website with netlify cms integration </code>
          </figcaption>
        </figure>
        <figure className="Gallery--Item">
          <div>
            <img className="skill" src={Graphics} alt={"sds"} />
          </div>
          <figcaption>Graphic design</figcaption>
          <figcaption>
          <code>  Creating a stunning and fast e-commerce sites with cms panel
            integration</code>
          </figcaption>
        </figure>
      
      </div>
    </Skills>
  );
}
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  figcaption:first-of-type{
    font-weight:bold;
    margin-bottom:5px;
  }
  .skill {
    height: 150px;
  }
  .Gallery{
    display:flex;
    &--Item{
      margin:2vw;
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  code{
    display:flex;
  }
`;

