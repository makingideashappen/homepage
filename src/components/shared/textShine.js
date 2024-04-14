import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Text = styled.div`
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  overflow: hidden;
`;

const Shine = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
`;

const TextShine = ({ children }) => {
  const textRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const shine = shineRef.current;

    const tl = gsap.timeline({ repeat: 1 });
    tl.to(shine, { left: "100%", duration: 1.5, ease: "power2.inOut" });

    return () => {
      tl.kill(); // Cleanup animation
    };
  }, []);

  return (
    <Text ref={textRef}>
      {children}
      <Shine ref={shineRef} />
    </Text>
  );
};

export default TextShine;
