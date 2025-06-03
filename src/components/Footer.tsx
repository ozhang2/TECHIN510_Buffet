import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #745E58;
  color: #FFFFFF;
  padding: 60px 0 40px 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainFooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-bottom: 60px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #FFFFFF;
`;

const FooterLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 15px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 30px;
`;

const BottomLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <MainFooterGrid>
        <FooterSection>
            <SectionTitle>Find Us</SectionTitle>
            <SocialIcons>
              <SocialIcon href="#" aria-label="Instagram">
                📷 Instagram
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                🐦 Twitter
              </SocialIcon>
              <SocialIcon href="#" aria-label="Email">
                ✉️ Email
              </SocialIcon>
            </SocialIcons>
        </FooterSection>
          
        <FooterSection>
            <SectionTitle>About Us</SectionTitle>
            <FooterLink href="#">Our Team</FooterLink>
            <FooterLink href="#">How We Work</FooterLink>
            <FooterLink href="#">Culture</FooterLink>
        </FooterSection>
          
        <FooterSection>
            <SectionTitle>Services</SectionTitle>
            <FooterLink href="#">AI Generate</FooterLink>
            <FooterLink href="#">Customized Services</FooterLink>
            <FooterLink href="#">Subscription</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
        </FooterSection>
        </MainFooterGrid>
        
        <BottomLinks>
          <BottomLink href="#">Term of Use</BottomLink>
          <BottomLink href="#">Privacy Policy</BottomLink>
          <BottomLink href="#">Cookie Setting</BottomLink>
        </BottomLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 