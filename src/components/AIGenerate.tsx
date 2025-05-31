import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  /* background: #f5f5f5; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 1400px;
  padding-top: 80px;
`;

const ChefImage = styled.img`
  width: 400px;
  height: auto;
  display: block;
  margin-right: 60px;
  @media (max-width: 900px) {
    width: 300px;
    margin-right: 32px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #111;
  margin-bottom: 17px;
`;

const Description = styled.p`
  align-self: stretch;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 50px;
`;

const StartButton = styled.button`
  display: inline-flex;
  padding: 10px 20px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: #D0D0D0;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
  &:hover {
    background: #b8a89a;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 630px;
  background-color: #EFEFEF;
  display: flex;
  align-items: center;
  padding: 60px 0;
`;

const BannerImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  transform: translateX(-150px);
`;

const BannerContent = styled.div`
  display: flex;
  width: 425px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 249px;
  flex-shrink: 0;
  transform: translateX(-300px);
`;

const AIGenerate = () => {
  const navigate = useNavigate();
  return (
    <Banner>
      <BannerImage src={process.env.PUBLIC_URL + '/images/chef-image.jpg'} alt="AI Generate" />
      <BannerContent>
        <Title>AI Generate</Title>
        <Description>
          Follow the instructions step-by-step, and the AI platform will quickly help you design a unique buffet setting, provide customized text suggestions, and calculate the approximate amount of food waste.
        </Description>
        <StartButton onClick={() => navigate('/ai-generate/category')}>Start AI Generate</StartButton>
      </BannerContent>
    </Banner>
  );
};

export default AIGenerate;