import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const ButtonContainer = styled(motion.button)`
  background: ${props => props.variant === 'secondary' ? theme.colors.white : theme.colors.brandGreen};
  color: ${props => props.variant === 'secondary' ? theme.colors.brandGreen : theme.colors.white};
  border: ${props => props.variant === 'secondary' ? `2px solid ${theme.colors.brandGreen}` : 'none'};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-family: ${theme.typography.fontFamily.english};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  transition: all 0.2s ease;
  min-width: 120px;
  
  &:disabled {
    background: ${theme.colors.gray300};
    color: ${theme.colors.gray500};
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${props => props.variant === 'secondary' ? theme.colors.gray50 : theme.colors.brandGreenDark};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const Icon = styled.span`
  font-size: ${theme.typography.fontSize.base};
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  icon = null,
  ...props 
}) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {icon && <Icon>{icon}</Icon>}
    </ButtonContainer>
  );
};

export default Button;
