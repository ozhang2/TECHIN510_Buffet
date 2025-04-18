import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #745E58;
  color: #FFFFFF;
  padding: 60px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>About us</SectionTitle>
          <FooterLink>our team</FooterLink>
          <FooterLink>how we work</FooterLink>
          <FooterLink>culture</FooterLink>
        </FooterSection>
        <FooterSection>
          <SectionTitle>services</SectionTitle>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>AI Generate</FooterLink>
          <FooterLink>customized services</FooterLink>
          <FooterLink>subscription</FooterLink>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Legal</SectionTitle>
          <FooterLink>Term of Use</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Cookie Setting</FooterLink>
        </FooterSection>
        <FooterSection>
          <SectionTitle>find us</SectionTitle>
          <SocialIcons>
            <SocialIcon>Twitter</SocialIcon>
            <SocialIcon>Instagram</SocialIcon>
            <SocialIcon>Gmail</SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 