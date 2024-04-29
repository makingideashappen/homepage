import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const SvgContainer = styled.div`
  position: relative;
`;

const Svg = styled.svg`
  position: absolute;
  top: -100px;
`;

const HiddenSvg = styled.svg`
  visibility: hidden;
`;

const MorphSVGAnimation = () => {
  const path01Ref = useRef(null);
  const path02Ref = useRef(null);

  useEffect(() => {
    const action = gsap.timeline({ paused: false });

    action
      .to(path01Ref.current, { duration: 2, morphSVG: path02Ref.current })
      .to(path02Ref.current, { duration: 2, morphSVG: path01Ref.current }, 0);

    // Start the animation
    action.play();

    return () => {
      action.kill();
    };
  }, []);

  return (
    <SvgContainer>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 300"
        className="hidden"
      >
        <g id="layer1" transform="translate(0 -752.362)">
          <path
            ref={path01Ref}
            id="path01"
            className="org"
            fill="none"
            stroke="#000"
            strokeWidth="15"
            d="M24.268 928.952h443.974"
          />
          <path
            ref={path02Ref}
            id="path02"
            className="org"
            fill="none"
            stroke="#000"
            strokeWidth="15"
            d="M380.44 881.545h31.604v94.815H380.44zm37.323 0h31.605v94.815h-31.605zm-74.648 0h31.605v94.815h-31.605zm-262.649 0h31.605v94.815H80.466zm37.324 0h31.605v94.815H117.79zm-74.648 0h31.605v94.815H43.142z"
          />
        </g>
      </Svg>
    </SvgContainer>
  );
};

export default MorphSVGAnimation;
