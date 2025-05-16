import React from 'react';
import styled from 'styled-components';

const CustomizedServicesContainer = styled.section`
  padding: 120px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  width: 425px;
  margin-bottom: 20px;
  text-align: left;
`;

const Description = styled.p`
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 425px;
  max-width: 100%;
  margin: 0 auto 40px auto;
  text-align: left;
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

const Navbar = styled.nav`
  width: 100%;
  height: 64px;
  background: #6f5a54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 60px;
`;

const LeftContent = styled.div`
  display: flex;
  width: 425px;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
  justify-content: space-between;
`;

const CusImage = styled.img`
  height: 100%;
  width: auto;
  min-width: 300px;
  max-width: 600px;
  object-fit: contain;
  border-radius: 20px;
  align-self: stretch;
`;

const CustomizedServices = () => {
  return (
    <CustomizedServicesContainer>
      <FlexWrapper>
        <LeftContent>
          <Title>Customize your buffet setting</Title>
          <Description>
            For different companies, we will provide different customized design solutions, compared with AI generation, customized service is more complex, and there will be a follow-up support by target designers.
          </Description>
          <GetStartedButton>get started</GetStartedButton>
        </LeftContent>
        <CusImage src={process.env.PUBLIC_URL + '/images/landing-cus.jpg'} alt="Customized Service" />
      </FlexWrapper>
    </CustomizedServicesContainer>
  );
};

export default CustomizedServices;