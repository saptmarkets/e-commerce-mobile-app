import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BottomNavContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(116, 189, 67, 0.2);
  padding: 8px 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 60px;
  
  ${props => props.$active && `
    background: linear-gradient(135deg, #74bd43, #5a9a35);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(116, 189, 67, 0.3);
  `}
  
  &:hover {
    transform: translateY(-1px);
    background: ${props => props.$active ? 'linear-gradient(135deg, #74bd43, #5a9a35)' : 'rgba(116, 189, 67, 0.1)'};
  }
`;

const NavIcon = styled.div`
  font-size: 20px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLabel = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
`;

const BottomNavigation = ({ currentScreen, onNavigate }) => {
  const navItems = [
    {
      id: 'home',
      icon: '🏠',
      label: 'الرئيسية',
      screen: 'home'
    },
    {
      id: 'categories',
      icon: '📂',
      label: 'التصنيفات',
      screen: 'categories'
    },
    {
      id: 'offers',
      icon: '🎯',
      label: 'العروض',
      screen: 'offers'
    },
    {
      id: 'orders',
      icon: '📋',
      label: 'الطلبات',
      screen: 'orders'
    },
    {
      id: 'loyalty',
      icon: '⭐',
      label: 'النقاط',
      screen: 'loyalty'
    }
  ];

  return (
    <BottomNavContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          $active={currentScreen === item.screen}
          onClick={() => onNavigate(item.screen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavIcon>{item.icon}</NavIcon>
          <NavLabel>{item.label}</NavLabel>
        </NavItem>
      ))}
    </BottomNavContainer>
  );
};

export default BottomNavigation;
