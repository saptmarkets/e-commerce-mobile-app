import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const FeatureCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  text-align: center;
  max-width: 100px;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.sm};
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.brandGreen};
  stroke: ${theme.colors.brandGreen};
  stroke-width: 1.5;
`;

const FeatureText = styled.div`
  font-family: ${theme.typography.fontFamily.english};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray800};
  line-height: 1.4;
`;

const FeatureCard = ({ icon, text, delay = 0 }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'shopping':
        return (
          <Icon viewBox="0 0 24 24">
            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </Icon>
        );
      case 'star':
        return (
          <Icon viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </Icon>
        );
      case 'users':
        return (
          <Icon viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </Icon>
        );
      default:
        return null;
    }
  };

  return (
    <FeatureCardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <IconContainer>
        {getIcon(icon)}
      </IconContainer>
      <FeatureText>{text}</FeatureText>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
