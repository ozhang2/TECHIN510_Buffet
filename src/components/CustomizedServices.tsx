import React from 'react';
import styled from 'styled-components';

const CustomizedServicesContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
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

const GetStartedButton = styled.button`
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

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #FFFFFF;
  border-radius: 20px;
  margin: 40px 0;
  overflow: hidden;
`;

const CustomizedServices = () => {
  return (
    <CustomizedServicesContainer>
      <Title>Customize your buffet setting</Title>
      <Description>
        For different companies, we will provide different customized design solutions, compared with AI generation,
        customized service is more complex, and there will be a follow-up support by target designers.
      </Description>
      <GetStartedButton>get started</GetStartedButton>
      <ImageContainer />
    </CustomizedServicesContainer>
  );
};

export default CustomizedServices; 