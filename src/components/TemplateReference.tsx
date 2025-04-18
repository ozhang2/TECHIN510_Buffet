import React from 'react';
import styled from 'styled-components';

const TemplateReferenceContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ViewMoreButton = styled.button`
  background-color: #ECE5DF;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #D0D0D0;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
`;

const ImageItem = styled.div`
  height: 200px;
  background-color: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
`;

const TemplateReference = () => {
  return (
    <TemplateReferenceContainer>
      <Title>get inspired</Title>
      <Description>
        This platform has been curated to provide culinary professionals with a wealth of ideas and tips to enhance their
        plating skills. From color palettes and themed concepts to innovative plating ideas, the site offers comprehensive
        reference photos to help chefs transform buffet tables into visually stunning culinary showcases.
      </Description>
      <ViewMoreButton>view more</ViewMoreButton>
      <ImageGrid>
        {[...Array(8)].map((_, index) => (
          <ImageItem key={index} />
        ))}
      </ImageGrid>
    </TemplateReferenceContainer>
  );
};

export default TemplateReference; 