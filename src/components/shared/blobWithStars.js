import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Blob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px; /* Adjust size as needed */
  height: 200px; /* Adjust size as needed */
  background-color: #ffffff; /* Adjust color as needed */
  border-radius: 50%;
  z-index: 1;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  z-index: 2;
`;

const BlobWithStars = ({ image }) => {
  const starsRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    const stars = starsRef.current;
    const blob = blobRef.current;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(stars, { rotation: 360, duration: 10, ease: "none" });
    tl.to(blob, { rotation: -360, duration: 10, ease: "none" }, 0);

    return () => {
      tl.kill(); // Cleanup animation
    };
  }, []);

  return (
    <Container>
      <Stars ref={starsRef}>{/* Render your stars here */}</Stars>
      <Blob ref={blobRef} />
      <Image src={image} alt="Your Image" />
    </Container>
  );
};

export default BlobWithStars;
