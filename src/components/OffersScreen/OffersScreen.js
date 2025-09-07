import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
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

// Offers Section
const OffersSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 15px 0;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const OfferCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  direction: rtl;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
  }
`;

const OfferImageSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const OfferIcon = styled.div`
  font-size: 2rem;
`;

const OfferBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.6rem;
  font-weight: 600;
  white-space: nowrap;
  z-index: 5;
`;

const OfferName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: center;
  line-height: 1.2;
`;

const OfferUnit = styled.div`
  font-size: 0.65rem;
  color: #6c757d;
  margin-bottom: 6px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: center;
`;

const QuantityInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 6px;
  font-size: 0.65rem;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
`;

const MinQty = styled.span`
  background: rgba(116, 48, 140, 0.1);
  color: #74308c;
  padding: 1px 4px;
  border-radius: 6px;
  font-size: 0.55rem;
  font-weight: 600;
`;

const MaxQty = styled.span`
  background: rgba(116, 189, 67, 0.1);
  color: #74308c;
  padding: 1px 4px;
  border-radius: 6px;
  font-size: 0.55rem;
  font-weight: 600;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const OldPrice = styled.span`
  font-size: 0.7rem;
  color: #adb5bd;
  text-decoration: line-through;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const NewPrice = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: #74bd43;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const OfferAddButton = styled(motion.button)`
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  background: #74bd43;
  border: none;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a9a35;
    transform: scale(1.1);
  }
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
    fill: #74bd43;
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

// Offers Screen Component
const OffersScreen = ({ onNavigate, onAddToCart, cartCount = 0 }) => {

  const navItems = [
    { icon: '🏠', label: 'الرئيسية', id: 'home' },
    { icon: '📂', label: 'التصنيفات', id: 'categories' },
    { icon: '🎯', label: 'العروض', id: 'promotions' },
    { icon: '📋', label: 'الطلبات', id: 'orders' },
    { icon: '💎', label: 'النقاط', id: 'loyalty' }
  ];

  const offers = [
    {
      id: 'offer1',
      name: 'تفاح أحمر',
      unit: 'كيلو',
      icon: '🍎',
      minQty: '1',
      maxQty: '10',
      oldPrice: '7.99',
      newPrice: '5.99',
      remainingDays: '4 أيام'
    },
    {
      id: 'offer2',
      name: 'موز طازج',
      unit: 'كيلو',
      icon: '🍌',
      minQty: '2',
      maxQty: '15',
      oldPrice: '4.50',
      newPrice: '3.99',
      remainingDays: '2 أيام'
    },
    {
      id: 'offer3',
      name: 'طماطم عضوية',
      unit: 'كيلو',
      icon: '🍅',
      minQty: '1',
      maxQty: '8',
      oldPrice: '6.99',
      newPrice: '4.99',
      remainingDays: '6 أيام'
    },
    {
      id: 'offer4',
      name: 'خس طازج',
      unit: 'حبة',
      icon: '🥬',
      minQty: '1',
      maxQty: '5',
      oldPrice: '3.50',
      newPrice: '2.75',
      remainingDays: '3 أيام'
    },
    {
      id: 'offer5',
      name: 'جبن موزاريلا',
      unit: 'كيلو',
      icon: '🧀',
      minQty: '1',
      maxQty: '6',
      oldPrice: '12.99',
      newPrice: '8.99',
      remainingDays: '5 أيام'
    },
    {
      id: 'offer6',
      name: 'خبز طازج',
      unit: 'رغيف',
      icon: '🍞',
      minQty: '2',
      maxQty: '12',
      oldPrice: '2.50',
      newPrice: '1.99',
      remainingDays: '1 يوم'
    },
    {
      id: 'offer7',
      name: 'دجاج طازج',
      unit: 'كيلو',
      icon: '🐔',
      minQty: '1',
      maxQty: '4',
      oldPrice: '15.99',
      newPrice: '12.99',
      remainingDays: '2 أيام'
    },
    {
      id: 'offer8',
      name: 'سمك طازج',
      unit: 'كيلو',
      icon: '🐟',
      minQty: '1',
      maxQty: '3',
      oldPrice: '18.99',
      newPrice: '14.99',
      remainingDays: '1 يوم'
    },
    {
      id: 'offer9',
      name: 'عنب أحمر',
      unit: 'كيلو',
      icon: '🍇',
      minQty: '1',
      maxQty: '8',
      oldPrice: '8.99',
      newPrice: '6.99',
      remainingDays: '4 أيام'
    },
    {
      id: 'offer10',
      name: 'فراولة طازجة',
      unit: 'صندوق',
      icon: '🍓',
      minQty: '1',
      maxQty: '5',
      oldPrice: '12.50',
      newPrice: '8.50',
      remainingDays: '2 أيام'
    },
    {
      id: 'offer11',
      name: 'زبدة طازجة',
      unit: 'كيلو',
      icon: '🧈',
      minQty: '1',
      maxQty: '4',
      oldPrice: '8.99',
      newPrice: '5.50',
      remainingDays: '3 أيام'
    },
    {
      id: 'offer12',
      name: 'حليب طازج',
      unit: 'لتر',
      icon: '🥛',
      minQty: '2',
      maxQty: '10',
      oldPrice: '5.50',
      newPrice: '3.50',
      remainingDays: '5 أيام'
    }
  ];

  const handleAddToCartLocal = (product) => {
    onAddToCart && onAddToCart({ ...product, price: product.newPrice });
  };

  const handleNavigation = (screenId) => {
    if (screenId === 'offers') {
      // Already on offers screen
      return;
    } else if (screenId === 'home') {
      onNavigate && onNavigate('home');
    } else {
      onNavigate && onNavigate(screenId);
    }
  };

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
            onClick={() => onNavigate && onNavigate('home')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/>
            </svg>
          </BackButton>
          <HeaderTitle>العروض الخاصة</HeaderTitle>
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
          <SearchInput placeholder="ابحث في العروض..." />
        </SearchSection>

        {/* Offers Section */}
        <OffersSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SectionTitle>عروض اليوم</SectionTitle>
          <OffersGrid>
            {offers.map((offer, index) => (
              <OfferCard
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                <OfferBadge>{offer.remainingDays}</OfferBadge>
                <OfferImageSection>
                  <OfferIcon>{offer.icon}</OfferIcon>
                </OfferImageSection>
                <OfferName>{offer.name}</OfferName>
                <OfferUnit>الوحدة: {offer.unit}</OfferUnit>
                <QuantityInfo>
                  <MinQty>الحد الأدنى: {offer.minQty}</MinQty>
                  <MaxQty>الحد الأقصى: {offer.maxQty}</MaxQty>
                </QuantityInfo>
                <PriceContainer>
                  <OldPrice>{offer.oldPrice} ريال</OldPrice>
                  <NewPrice>{offer.newPrice} ريال</NewPrice>
                </PriceContainer>
                <OfferAddButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCartLocal(offer);
                  }}
                >
                  +
                </OfferAddButton>
              </OfferCard>
            ))}
          </OffersGrid>
        </OffersSection>
      </MainContent>

      {/* Bottom Navigation */}
      <BottomNavigation>
        {navItems.map((item, index) => (
          <NavItem
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={item.id === 'promotions' ? 'active' : ''}
            onClick={() => handleNavigation(item.id)}
          >
            <NavIcon>{item.icon}</NavIcon>
            <NavLabel active={item.id === 'promotions'}>{item.label}</NavLabel>
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
        onClick={() => onNavigate && onNavigate('cart')}
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
        currentScreen="offers" 
        onNavigate={onNavigate} 
      />
    </MobileFrame>
  );
};

export default OffersScreen;
