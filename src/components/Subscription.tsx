import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 👇 声明 PlanCard 的 props 类型（重点修复部分）
interface PlanCardProps {
  isHighlighted?: boolean;
}

// 👇 styled component，支持 isHighlighted prop
const PlanCard = styled(motion.div)<PlanCardProps>`
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: ${props => props.isHighlighted ? '3px solid #9E867F' : 'none'};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
`;

const PlanTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const plans = [
  {
    title: 'Basic Plan',
    isHighlighted: false,
  },
  {
    title: 'Pro Plan',
    isHighlighted: true,
  },
  {
    title: 'Enterprise Plan',
    isHighlighted: false,
  },
];

const Subscription: React.FC = () => {
  return (
    <section>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Subscription Plans</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            isHighlighted={plan.isHighlighted}
            whileHover={{ y: -10 }}
          >
            <PlanTitle>{plan.title}</PlanTitle>
          </PlanCard>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
