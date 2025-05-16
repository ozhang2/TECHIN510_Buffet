import React from 'react';
import styled from 'styled-components';

const TemplateReferenceContainer = styled.section`
  padding: 60px 0;
  text-align: center;
`;

const Title = styled.h2`
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 900px;
  max-width: 100%;
  margin: 0 auto 40px auto;
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
  margin-bottom: 0;
  &:hover {
    background-color: #D0D0D0;
  }
`;

const LandingImage = styled.img`
  width: 90vw;
  max-width: 1400px;
  border-radius: 20px;
  display: block;
  margin: 40px 0 0 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const SubscriptionImage = styled.img`
  display: block;
  margin: 40px auto 0 auto;
  width: 60vw;
  max-width: 900px;
  border-radius: 20px;
`;

const SubscriptionTitle = styled(Title)`
  margin-top: 155px;
`;

const QImage = styled.img`
  width: 100vw;
  height: auto;
  border-radius: 0;
  display: block;
  margin: 120px 0 0 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const TemplateReference = () => {
  return (
    <TemplateReferenceContainer>
      <Title>get inspired</Title>
      <Description>
        This platform has been curated to provide culinary professionals with a wealth of ideas and tips to enhance their plating skills. From color palettes and themed concepts to innovative plating ideas, the site offers comprehensive reference photos to help chefs transform buffet tables into visually stunning culinary showcases.
      </Description>
      <ViewMoreButton>view more</ViewMoreButton>
      <LandingImage src={process.env.PUBLIC_URL + '/images/landing-image-ref.jpg'} alt="Landing Inspiration" />
      <SubscriptionTitle>Purchase Subscription</SubscriptionTitle>
      <SubscriptionImage src={process.env.PUBLIC_URL + '/images/landing-subscrip.jpg'} alt="Subscription Section" />
      <QImage src={process.env.PUBLIC_URL + '/images/landing-Q.jpg'} alt="Q Section" />
    </TemplateReferenceContainer>
  );
};

export default TemplateReference;