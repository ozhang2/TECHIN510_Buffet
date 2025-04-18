import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.section`
  padding: 60px 20px;
  background-color: #F7F4F1;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 40px;
`;

const FAQList = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000000;
`;

const Question = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlusIcon = styled.span`
  font-size: 24px;
`;

const AdditionalButton = styled.button`
  background-color: #ECE5DF;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 40px;

  &:hover {
    background-color: #D0D0D0;
  }
`;

const FAQ = () => {
  const faqs = [
    'How to use AI Generate service?',
    'How to register an account?',
    'How to stop subscription?'
  ];

  return (
    <FAQContainer>
      <Title>Any questions?</Title>
      <Subtitle>We are here to help.</Subtitle>
      <FAQList>
        {faqs.map((question, index) => (
          <FAQItem key={index}>
            <Question>
              {question}
              <PlusIcon>+</PlusIcon>
            </Question>
          </FAQItem>
        ))}
      </FAQList>
      <AdditionalButton>Additional FAQs</AdditionalButton>
    </FAQContainer>
  );
};

export default FAQ; 