import React from "react";
import styled, { keyframes } from "styled-components";

const pastels = [
  "#feffaa",
  "#b2ff90",
  "#fbc2eb",
  "#a6c1ee",
  "#84fab0",
  "#8fd3f4",
  "#a1c4fd",
  "#c2e9fb",
  "#f6d365",
  "#fda085",
  "#ffecd2",
  "#fcb69f",
];
const cubeEdge = "4em";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  font-size: 8vmin;
  animation: ${keyframes`
    from {
      transform: rotateY(2turn) rotateX(2turn);
    }
    to {
      transform: rotateY(1turn) rotateX(1turn);
    }
  `} 8s ease-in-out infinite;
`;

const Face = styled.div`
  margin: -0.5 * ${cubeEdge};
  width: ${cubeEdge};
  height: ${cubeEdge};
  backface-visibility: hidden;
  transform: rotate3d(var(--i), var(--j), 0, var(--a))
    translateZ(0.5 * ${cubeEdge});
  background: linear-gradient(var(--ga), var(--gs));
  &:nth-child(n + 5) {
    --i: 1;
    --j: 0;
  }

  ${({ index }) => {
    const f = index;
    const a = f < 4 ? f : Math.pow(-1, f) * 90 + "deg";
    const ga = Math.random() * 360 + "deg";
    const gs = pastels[f];
    return `
      --a: ${a};
      --ga: ${ga};
      --gs: ${gs};
    `;
  }}
`;

const CubeComponent = () => {
  return (
    <Container className="cube">
      {[...Array(6)].map((_, index) => (
        <Face key={index} index={index} className="cube__face" />
      ))}
    </Container>
  );
};

export default CubeComponent;
