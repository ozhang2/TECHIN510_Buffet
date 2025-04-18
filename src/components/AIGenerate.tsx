import React from 'react';
import styled from 'styled-components';

const AIGenerateContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 60px 20px;
  background-color: #EFEFEF;
  margin: 40px 0;
`;

const Content = styled.div`
  flex: 1;
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
  margin-bottom: 30px;
`;

const GetStartedButton = styled.button`
  background-color: #D0D0D0;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #B0B0B0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 400px;
  background-color: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
`;

const AIGenerate = () => {
  return (
    <AIGenerateContainer>
      <Content>
        <Title>AI Generate</Title>
        <Description>
          Follow the instructions step-by-step, and the AI platform will quickly help you design a unique buffet setting,
          provide customized text suggestions, and calculate the approximate amount of food waste.
        </Description>
        <GetStartedButton>Start AI Generate</GetStartedButton>
      </Content>
      <ImageContainer />
    </AIGenerateContainer>
  );
};

export default AIGenerate; 