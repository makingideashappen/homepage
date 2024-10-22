import React from "react";
import styled from "styled-components";

// Container for the entire gallery
const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

// Individual portfolio item - flexbox for image on the left and text on the right
const PortfolioItemWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;
  color: black;
  // Responsive for mobile: Stack the image and text vertically
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Image on the left
const PortfolioImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  // Responsive: Make image take full width on mobile
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Text on the right
const PortfolioInfo = styled.div`
  flex: 1; // This makes the text section flexible to fill the available space
  padding: 15px;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  p {
    color: #666;
  }
`;

// PortfolioItem component that represents each item in the gallery
const PortfolioItem = ({ image, title, description }) => {
  return (
    // The 'href' attribute points to the full-sized image URL
    // 'target="_blank"' ensures the image opens in a new tab
    <PortfolioItemWrapper
      href={image}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PortfolioImage src={image} alt={title} />
      <PortfolioInfo>
        <h3>{title}</h3>
        <p>{description}</p>
      </PortfolioInfo>
    </PortfolioItemWrapper>
  );
};

// Gallery component that receives an array of items as props
const Gallery = ({ items }) => {
  return (
    <GalleryWrapper>
      {items.map((item, index) => (
        <PortfolioItem
          key={index}
          image={item.image} // Full-sized image link for 'href' and 'src'
          title={item.title}
          description={item.description}
        />
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
