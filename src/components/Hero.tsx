import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'PoetsenOne', sans-serif;
  font-size: 36px;
  color: #745E58;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-family: 'Avenir', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 40px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>NUNU: New + Utility</Title>
      <Description>
        NUNU is a platform that primarily helps chefs and buffet managers to improve or learn the aesthetics of buffet presentation. 
        We aim to help users with no design background to efficiently design their own buffet presentation and reduce food waste.
      </Description>
    </HeroContainer>
  );
};

export default Hero; 