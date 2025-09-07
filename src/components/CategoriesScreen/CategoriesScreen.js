import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
import CategoryProducts from '../CategoryProducts';
import BottomNavigation from '../BottomNavigation';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Mobile Frame Container
const MobileFrame = styled(motion.div)`
  width: 393px;
  height: 852px;
  background: white;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  direction: rtl;
`;

// Main Content Container
const MainContent = styled.div`
  height: calc(100% - 80px); /* Leave space for bottom navigation */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(116, 48, 140, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(116, 48, 140, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(116, 48, 140, 0.5);
    }
  }
`;

// Header Section
const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: linear-gradient(135deg, #74308c, #5a2470);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  direction: rtl;
`;

const BackButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

const HeaderTitle = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
  flex: 1;
`;

const NotificationIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 18px;
  height: 18px;
  background: #ff4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 68, 68, 0.4);
  border: 2px solid white;
`;

// Search Section
const SearchSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 12px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(116, 48, 140, 0.3);
  border-radius: 15px;
  color: #74308c;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  direction: rtl;
  text-align: right;
  
  &::placeholder {
    color: rgba(116, 48, 140, 0.6);
    font-family: ${theme.typography.fontFamily.arabic};
  }
  
  &:focus {
    outline: none;
    border-color: #74308c;
    box-shadow: 0 0 0 3px rgba(116, 48, 140, 0.1);
  }
`;

// Categories Grid
const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const CategoryCard = styled(motion.div)`
  background: ${props => props.bgImage ? `url(${props.bgImage})` : 'rgba(255, 255, 255, 0.8)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 0;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  direction: rtl;
  width: 100%;
  box-sizing: border-box;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryStrip = styled.div`
  background: linear-gradient(135deg, rgba(116, 48, 140, 0.9), rgba(139, 61, 168, 0.9));
  padding: 12px 16px;
  border-radius: 0 0 12px 12px;
  width: 100%;
  box-sizing: border-box;
`;

const CategoryName = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
  direction: rtl;
  line-height: 1.2;
`;

const NavItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  gap: 3px;
  min-width: 50px;
  
  &:hover {
    background: rgba(116, 48, 140, 0.1);
  }
  
  &.active {
    background: rgba(255, 193, 7, 0.2);
  }
`;

const NavIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2px;
`;

const NavLabel = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${props => props.active ? '#74308c' : '#6c757d'};
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: center;
`;

// Floating Cart Icon
const FloatingCart = styled(motion.div)`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid #74bd43;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    border-color: #5a9a35;
  }
`;

const CartIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
    fill: #74308c;
  }
`;

const CartBadge = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  width: 18px;
  height: 18px;
  background: #ff4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 68, 68, 0.4);
  border: 2px solid white;
`;

// Categories Screen Component
const CategoriesScreen = ({ onNavigate, onAddToCart, cartCount = 0 }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [currentScreen, setCurrentScreen] = React.useState('categories');
  const navItems = [
    { icon: '🏠', label: 'الرئيسية', id: 'home' },
    { icon: '📂', label: 'التصنيفات', id: 'categories' },
    { icon: '🎯', label: 'العروض', id: 'promotions' },
    { icon: '📋', label: 'الطلبات', id: 'orders' },
    { icon: '💎', label: 'النقاط', id: 'loyalty' }
  ];

  const categories = [
    { name: 'الخضروات', id: 'vegetables', bgImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
    { name: 'الفواكه', id: 'fruits', bgImage: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop' },
    { name: 'الألبان', id: 'dairy', bgImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop' },
    { name: 'المخبوزات', id: 'bakery', bgImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop' },
    { name: 'اللحوم', id: 'meat', bgImage: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop' },
    { name: 'الأسماك', id: 'fish', bgImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop' },
    { name: 'المشروبات', id: 'beverages', bgImage: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
    { name: 'الحلويات', id: 'sweets', bgImage: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
    { name: 'المكسرات', id: 'nuts', bgImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop' },
    { name: 'التوابل', id: 'spices', bgImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop' },
    { name: 'الأرز والحبوب', id: 'grains', bgImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop' },
    { name: 'الوجبات الجاهزة', id: 'ready-meals', bgImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop' },
    { name: 'المنظفات', id: 'cleaning', bgImage: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=400&h=300&fit=crop' },
    { name: 'العناية الشخصية', id: 'personal-care', bgImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop' },
    { name: 'الأدوات المنزلية', id: 'home-tools', bgImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
    { name: 'الحيوانات الأليفة', id: 'pets', bgImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop' }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentScreen('category-products');
  };

  const handleNavigation = (screenId) => {
    if (screenId === 'categories') {
      setCurrentScreen('categories');
      setSelectedCategory(null);
    } else if (screenId === 'home') {
      onNavigate && onNavigate('home');
    } else {
      onNavigate && onNavigate(screenId);
    }
  };

  // Show CategoryProducts if a category is selected
  if (currentScreen === 'category-products' && selectedCategory) {
    return (
      <CategoryProducts
        categoryId={selectedCategory.id}
        categoryName={selectedCategory.name}
        onNavigate={handleNavigation}
        onAddToCart={onAddToCart}
        cartCount={cartCount}
      />
    );
  }

  return (
    <MobileFrame
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <MainContent>
        {/* Header */}
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <BackButton
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/>
            </svg>
          </BackButton>
          <HeaderTitle>التصنيفات</HeaderTitle>
          <NotificationIcon>
            <svg viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <NotificationBadge>3</NotificationBadge>
          </NotificationIcon>
        </Header>

        {/* Search Section */}
        <SearchSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SearchInput placeholder="ابحث في التصنيفات..." />
        </SearchSection>

        {/* Categories Grid */}
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              bgImage={category.bgImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category)}
            >
              <CategoryStrip>
                <CategoryName>{category.name}</CategoryName>
              </CategoryStrip>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </MainContent>

      {/* Bottom Navigation */}
      <BottomNavigation>
        {navItems.map((item, index) => (
          <NavItem
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={item.id === 'categories' ? 'active' : ''}
            onClick={() => handleNavigation(item.id)}
          >
            <NavIcon>{item.icon}</NavIcon>
            <NavLabel active={item.id === 'categories'}>{item.label}</NavLabel>
          </NavItem>
        ))}
      </BottomNavigation>

      {/* Floating Cart Icon */}
      <FloatingCart
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleNavigation('cart')}
      >
        <CartIcon>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </CartIcon>
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
      </FloatingCart>
      
      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen="categories" 
        onNavigate={handleNavigation} 
      />
    </MobileFrame>
  );
};

export default CategoriesScreen;
