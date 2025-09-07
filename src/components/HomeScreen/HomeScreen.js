import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
import ProductDetails from '../ProductDetails';
import CategoriesScreen from '../CategoriesScreen';
import OffersScreen from '../OffersScreen';
import NotificationsScreen from '../NotificationsScreen';
import OrdersScreen from '../OrdersScreen';
import LoyaltyScreen from '../LoyaltyScreen';
import CheckoutScreen from '../CheckoutScreen';
import CartScreen from '../CartScreen';
import OrderConfirmationScreen from '../OrderConfirmationScreen';
import UserProfileScreen from '../UserProfileScreen';
import LoginRegisterScreen from '../LoginRegisterScreen';
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

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
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
  padding-bottom: 100px; /* Extra padding for bottom nav */
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
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(116, 48, 140, 0.5);
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

const WelcomeText = styled.div`
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
  flex: 1;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
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

// Banner Section
const BannerSection = styled(motion.div)`
  background: linear-gradient(135deg, #74bd43, #74308c);
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  height: 1000px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #74bd43, #74308c);
  border-radius: 20px;
  position: relative;
`;

const BannerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 2;
`;

const BannerText = styled.div`
  flex: 1;
  text-align: center;
`;

const BannerTitle = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  margin-bottom: 8px;
  direction: rtl;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const BannerSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const BannerIcon = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const BannerDecoration = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
`;

const BannerDecoration2 = styled.div`
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 1;
`;

// Categories Section
const CategoriesSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const CategoryGrid = styled.div`
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

const CategoryIcon = styled.div`
  font-size: 2rem;
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
    box-shadow: 0 0 0 2px rgba(116, 48, 140, 0.3);
  }
`;

// Quick Actions Section
const QuickActions = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const ActionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }
`;

const ActionIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ActionTitle = styled.div`
  color: #74308c;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
  direction: rtl;
`;

// Featured Products Section
const FeaturedSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.div`
  color: #74308c;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: right;
  direction: rtl;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 12px;
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

const ProductImageSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const ProductEmoji = styled.div`
  font-size: 1.8rem;
`;

const ProductName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #74308c;
  margin-bottom: 4px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
`;

const ProductPrice = styled.div`
  font-size: 0.75rem;
  color: #74bd43;
  font-weight: bold;
`;

const ProductAddButton = styled(motion.button)`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #74bd43;
  border: none;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: #5a9a35;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
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
  background: #FF6B6B;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: bold;
  border: 2px solid white;
`;

// Offers Section
const OffersSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const OfferCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(116, 48, 140, 0.1);
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(116, 48, 140, 0.2);
    border-color: rgba(116, 48, 140, 0.3);
  }
`;

const OfferBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: bold;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.4);
  white-space: nowrap;
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

const OfferName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #74308c;
  margin-bottom: 4px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
`;

const OfferUnit = styled.div`
  font-size: 0.65rem;
  color: #666;
  margin-bottom: 6px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
`;

const QuantityInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  font-size: 0.65rem;
  color: #666;
`;

const MinQty = styled.span`
  background: rgba(116, 48, 140, 0.1);
  padding: 1px 4px;
  border-radius: 6px;
  font-size: 0.55rem;
`;

const MaxQty = styled.span`
  background: rgba(116, 189, 67, 0.1);
  padding: 1px 4px;
  border-radius: 6px;
  font-size: 0.55rem;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const OldPrice = styled.div`
  font-size: 0.7rem;
  color: #999;
  text-decoration: line-through;
  font-weight: 500;
`;

const NewPrice = styled.div`
  font-size: 0.9rem;
  color: #74bd43;
  font-weight: bold;
`;

const AddToCartButton = styled(motion.button)`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #74bd43;
  border: none;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: #5a9a35;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Offers Grid (2 columns)
const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

// Section Footer Button
const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const ViewAllButton = styled(motion.button)`
  background: none;
  color: #74308c;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ArrowIcon = styled.span`
  font-size: 2rem;
  font-weight: bold;
  transition: transform 0.3s ease;
  
  ${ViewAllButton}:hover & {
    transform: translateX(5px);
  }
`;

const DiscountPercent = styled.div`
  font-size: 0.6rem;
  color: #FF6B6B;
  font-weight: bold;
  background: rgba(255, 107, 107, 0.1);
  padding: 2px 6px;
  border-radius: 8px;
  margin-top: 3px;
`;

const HomeScreen = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState('home');
  const [cartItems, setCartItems] = React.useState([]);
  const [orderConfirmationData, setOrderConfirmationData] = React.useState(null);
  const [userData, setUserData] = React.useState({
    name: 'أحمد محمد',
    phone: '+966 50 123 4567',
    email: 'ahmed@example.com'
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Default to not logged in for demo

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const productId = product.id || product.name;
    const unitPrice = Number(product.newPrice || product.price || 0);
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === productId);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], qty: updated[existingIndex].qty + 1 };
        return updated;
      }
      return [...prev, { id: productId, name: product.name, unitPrice, qty: 1 }];
    });
  };

  const incrementCartItem = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decrementCartItem = (id) => {
    setCartItems(prev => prev
      .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
      .filter(item => item.qty > 0));
  };

  const removeCartItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = (items) => {
    if (!isLoggedIn) {
      // Show login screen if user is not logged in
      setCurrentScreen('login');
    } else {
      // Proceed to checkout if user is logged in
      setCurrentScreen('checkout');
    }
  };

  const handleProfileClick = () => {
    setCurrentScreen('profile');
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentScreen('checkout'); // Proceed to checkout after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('home');
  };

  const handlePlaceOrder = (orderData) => {
    console.log('Order placed:', orderData);
    // Store order data for confirmation screen
    setOrderConfirmationData(orderData);
    // Clear cart after successful order
    setCartItems([]);
    // Navigate to order confirmation screen
    setCurrentScreen('order-confirmation');
  };

  const handleUpdateCart = (action, itemId) => {
    if (action === 'increment') {
      incrementCartItem(itemId);
    } else if (action === 'decrement') {
      decrementCartItem(itemId);
    } else if (action === 'remove') {
      removeCartItem(itemId);
    }
  };

  const handleBuyNow = (product) => {
    console.log('Buy now:', product);
    // Here you would typically navigate to checkout
  };

  const handleNavigation = (screenId) => {
    if (screenId === 'categories') {
      setCurrentScreen('categories');
    } else if (screenId === 'promotions') {
      setCurrentScreen('offers');
    } else if (screenId === 'offers') {
      setCurrentScreen('offers');
    } else if (screenId === 'cart') {
      setCurrentScreen('cart');
    } else if (screenId === 'notifications') {
      setCurrentScreen('notifications');
    } else if (screenId === 'orders') {
      setCurrentScreen('orders');
    } else if (screenId === 'loyalty') {
      setCurrentScreen('loyalty');
    } else if (screenId === 'home') {
      setCurrentScreen('home');
    } else if (screenId === 'checkout') {
      setCurrentScreen('checkout');
    } else if (screenId === 'order-confirmation') {
      setCurrentScreen('order-confirmation');
    } else if (screenId === 'profile') {
      setCurrentScreen('profile');
    } else if (screenId === 'login') {
      setCurrentScreen('login');
    } else {
      onNavigate && onNavigate(screenId);
    }
  };

  const quickActions = [
    { icon: '🛒', title: 'سلة التسوق', action: 'cart' },
    { icon: '📦', title: 'طلباتي', action: 'orders' },
    { icon: '🎁', title: 'العروض', action: 'promotions' },
    { icon: '⭐', title: 'النقاط', action: 'loyalty' }
  ];

  const featuredProducts = [
    { emoji: '🍎', name: 'تفاح', price: '5.99' },
    { emoji: '🥕', name: 'جزر', price: '3.50' },
    { emoji: '🥛', name: 'حليب', price: '4.25' },
    { emoji: '🍞', name: 'خبز', price: '2.99' },
    { emoji: '🥚', name: 'بيض', price: '6.50' },
    { emoji: '🧀', name: 'جبن', price: '8.99' },
    { emoji: '🍌', name: 'موز', price: '4.50' },
    { emoji: '🍇', name: 'عنب', price: '7.99' },
    { emoji: '🥔', name: 'بطاطس', price: '3.25' },
    { emoji: '🥬', name: 'خس', price: '2.75' },
    { emoji: '🍅', name: 'طماطم', price: '4.99' },
    { emoji: '🥒', name: 'خيار', price: '3.99' }
  ];

  const categories = [
    { icon: '🥬', name: 'الخضروات', id: 'vegetables', bgImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
    { icon: '🍎', name: 'الفواكه', id: 'fruits', bgImage: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop' },
    { icon: '🥛', name: 'الألبان', id: 'dairy', bgImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop' },
    { icon: '🍞', name: 'المخبوزات', id: 'bakery', bgImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop' },
    { icon: '🥩', name: 'اللحوم', id: 'meat', bgImage: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop' },
    { icon: '🐟', name: 'الأسماك', id: 'fish', bgImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop' }
  ];

  const offers = [
    {
      id: 'offer1',
      name: 'تفاح أحمر',
      unit: 'كيلو',
      icon: '🍎',
      minQty: 1,
      maxQty: 5,
      oldPrice: '8.99',
      newPrice: '6.99',
      remainingDays: '3 أيام'
    },
    {
      id: 'offer2',
      name: 'حليب طازج',
      unit: 'لتر',
      icon: '🥛',
      minQty: 2,
      maxQty: 10,
      oldPrice: '5.50',
      newPrice: '4.25',
      remainingDays: '5 أيام'
    },
    {
      id: 'offer3',
      name: 'خبز أبيض',
      unit: 'رغيف',
      icon: '🍞',
      minQty: 3,
      maxQty: 15,
      oldPrice: '3.50',
      newPrice: '2.99',
      remainingDays: '2 أيام'
    },
    {
      id: 'offer4',
      name: 'جبن شيدر',
      unit: 'كيلو',
      icon: '🧀',
      minQty: 1,
      maxQty: 3,
      oldPrice: '12.99',
      newPrice: '9.99',
      remainingDays: '7 أيام'
    },
    {
      id: 'offer5',
      name: 'موز أصفر',
      unit: 'كيلو',
      icon: '🍌',
      minQty: 2,
      maxQty: 8,
      oldPrice: '6.50',
      newPrice: '4.50',
      remainingDays: '1 يوم'
    },
    {
      id: 'offer6',
      name: 'طماطم طازجة',
      unit: 'كيلو',
      icon: '🍅',
      minQty: 1,
      maxQty: 6,
      oldPrice: '7.99',
      newPrice: '5.99',
      remainingDays: '4 أيام'
    }
  ];

  // Show CategoriesScreen if current screen is categories
  if (currentScreen === 'categories') {
    return (
      <CategoriesScreen
        onNavigate={handleNavigation}
        onAddToCart={handleAddToCart}
        cartCount={cartItems.reduce((s, i) => s + i.qty, 0)}
      />
    );
  }

  // Show OffersScreen if current screen is offers
  if (currentScreen === 'offers') {
    return (
      <OffersScreen
        onNavigate={handleNavigation}
        onAddToCart={handleAddToCart}
        cartCount={cartItems.reduce((s, i) => s + i.qty, 0)}
      />
    );
  }

  // Show CartScreen if current screen is cart
  if (currentScreen === 'cart') {
    return (
      <CartScreen
        onNavigate={handleNavigation}
        items={cartItems}
        onIncrement={incrementCartItem}
        onDecrement={decrementCartItem}
        onRemove={removeCartItem}
        onCheckout={handleCheckout}
      />
    );
  }

  // Show LoginRegisterScreen if current screen is login
  if (currentScreen === 'login') {
    return (
      <LoginRegisterScreen
        onNavigate={handleLoginSuccess}
        mode="login"
      />
    );
  }

  // Show UserProfileScreen if current screen is profile
  if (currentScreen === 'profile') {
    return (
      <UserProfileScreen
        onNavigate={handleNavigation}
        userData={userData}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
    );
  }

  // Show OrderConfirmationScreen if current screen is order-confirmation
  if (currentScreen === 'order-confirmation') {
    return (
      <OrderConfirmationScreen
        onNavigate={handleNavigation}
        orderData={orderConfirmationData}
      />
    );
  }

  // Show CheckoutScreen if current screen is checkout
  if (currentScreen === 'checkout') {
    return (
      <CheckoutScreen
        onNavigate={handleNavigation}
        cartItems={cartItems}
        onPlaceOrder={handlePlaceOrder}
        onUpdateCart={handleUpdateCart}
      />
    );
  }

  // Show NotificationsScreen
  if (currentScreen === 'notifications') {
    return <NotificationsScreen onNavigate={handleNavigation} />;
  }

  // Show OrdersScreen
  if (currentScreen === 'orders') {
    return <OrdersScreen onNavigate={handleNavigation} />;
  }

  // Show LoyaltyScreen
  if (currentScreen === 'loyalty') {
    return <LoyaltyScreen onNavigate={handleNavigation} />;
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
          <NotificationIcon onClick={() => handleNavigation('notifications')}>
            <svg viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <NotificationBadge>3</NotificationBadge>
          </NotificationIcon>
          <WelcomeText>مرحباً بك في اسواق سبت المركزية</WelcomeText>
          <UserAvatar onClick={handleProfileClick}>م</UserAvatar>
        </Header>

        {/* Search Section */}
        <SearchSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SearchInput placeholder="ابحث عن المنتجات..." />
        </SearchSection>

                 {/* Banner Section */}
         <BannerSection
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
         >
           <BannerText>
             <BannerTitle>عروض خاصة اليوم!</BannerTitle>
             <BannerSubtitle>احصل على خصم 20% على جميع المنتجات</BannerSubtitle>
           </BannerText>
           <BannerIcon>🎉</BannerIcon>
         </BannerSection>

        {/* Quick Actions */}
        <QuickActions
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {quickActions.map((action, index) => (
            <ActionCard
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(action.action)}
            >
              <ActionIcon>{action.icon}</ActionIcon>
              <ActionTitle>{action.title}</ActionTitle>
            </ActionCard>
          ))}
        </QuickActions>

        {/* Categories Section */}
        <CategoriesSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SectionTitle>التصنيفات</SectionTitle>
          <CategoryGrid>
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                bgImage={category.bgImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate && onNavigate(category.id)}
              >
                <CategoryStrip>
                  <CategoryName>{category.name}</CategoryName>
                </CategoryStrip>
              </CategoryCard>
            ))}
          </CategoryGrid>
          <SectionFooter>
            <ViewAllButton
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('categories')}
            >
              <ArrowIcon>←</ArrowIcon>
            </ViewAllButton>
          </SectionFooter>
        </CategoriesSection>

        {/* Offers Section */}
        <OffersSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <SectionTitle>عروض خاصة</SectionTitle>
          <OffersGrid>
            {offers.map((offer, index) => (
              <OfferCard
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate && onNavigate(offer.id)}
              >
                <OfferBadge>{offer.remainingDays}</OfferBadge>
                <OfferImageSection>
                  <OfferIcon>{offer.icon}</OfferIcon>
                </OfferImageSection>
                <OfferName>{offer.name}</OfferName>
                <OfferUnit>{offer.unit}</OfferUnit>
                <QuantityInfo>
                  <MinQty>الحد الأدنى: {offer.minQty}</MinQty>
                  <MaxQty>الحد الأقصى: {offer.maxQty}</MaxQty>
                </QuantityInfo>
                <PriceContainer>
                  <OldPrice>{offer.oldPrice} ريال</OldPrice>
                  <NewPrice>{offer.newPrice} ريال</NewPrice>
                </PriceContainer>
                <AddToCartButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(offer);
                  }}
                >
                  +
                </AddToCartButton>
              </OfferCard>
            ))}
          </OffersGrid>
          <SectionFooter>
            <ViewAllButton
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('promotions')}
            >
              <ArrowIcon>←</ArrowIcon>
            </ViewAllButton>
          </SectionFooter>
        </OffersSection>

        {/* Featured Products */}
        <FeaturedSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <SectionTitle>منتجات مميزة</SectionTitle>
          <ProductGrid>
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleProductClick(product)}
                style={{ cursor: 'pointer' }}
              >
                <ProductImageSection>
                  <ProductEmoji>{product.emoji}</ProductEmoji>
                </ProductImageSection>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price} ريال</ProductPrice>
                <ProductAddButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  +
                </ProductAddButton>
              </ProductCard>
            ))}
          </ProductGrid>
        </FeaturedSection>
      </MainContent>

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen={currentScreen} 
        onNavigate={handleNavigation} 
      />

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
        {cartItems.reduce((sum, item) => sum + item.qty, 0) > 0 && (
          <CartBadge>{cartItems.reduce((sum, item) => sum + item.qty, 0)}</CartBadge>
        )}
      </FloatingCart>

      {/* Product Details Modal */}
      <ProductDetails
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
      
      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen={currentScreen} 
        onNavigate={handleNavigation} 
      />
    </MobileFrame>
  );
};

export default HomeScreen;
