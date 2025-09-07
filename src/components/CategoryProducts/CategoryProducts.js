import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
import ProductDetails from '../ProductDetails';

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

// Subcategories Tabs
const SubcategoriesSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SubcategoriesContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 5px;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(116, 48, 140, 0.1);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(116, 48, 140, 0.3);
    border-radius: 2px;
    
    &:hover {
      background: rgba(116, 48, 140, 0.5);
    }
  }
`;

const SubcategoryTab = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(135deg, #74308c, #5a2470)' : 'rgba(116, 48, 140, 0.1)'};
  color: ${props => props.active ? 'white' : '#74308c'};
  border: 2px solid ${props => props.active ? '#74308c' : 'rgba(116, 48, 140, 0.3)'};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #74308c, #5a2470)' : 'rgba(116, 48, 140, 0.2)'};
    transform: translateY(-1px);
  }
`;

// Products Section
const ProductsSection = styled(motion.div)`
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 15px;
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

const ProductEmoji = styled.div`
  font-size: 1.8rem;
  margin-bottom: 8px;
`;

const ProductName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: center;
  line-height: 1.2;
`;

const ProductPrice = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #74bd43;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: center;
`;

const ProductAddButton = styled(motion.button)`
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
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
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(116, 189, 67, 0.3);
  }
`;

// Bottom Navigation
const BottomNavigation = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: white;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
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

// CategoryProducts Screen Component
const CategoryProducts = ({ categoryId, categoryName, onNavigate, onAddToCart, cartCount = 0 }) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = React.useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState('all');

  const navItems = [
    { icon: '🏠', label: 'الرئيسية', id: 'home' },
    { icon: '📂', label: 'التصنيفات', id: 'categories' },
    { icon: '🎯', label: 'العروض', id: 'promotions' },
    { icon: '📋', label: 'الطلبات', id: 'orders' },
    { icon: '💎', label: 'النقاط', id: 'loyalty' }
  ];

  // Subcategories data based on category
  const getSubcategories = (categoryId) => {
    const subcategoriesMap = {
      'vegetables': [
        { id: 'all', name: 'الكل' },
        { id: 'leafy', name: 'الورقيات' },
        { id: 'root', name: 'الجذور' },
        { id: 'nightshade', name: 'الباذنجانيات' },
        { id: 'cruciferous', name: 'الكرنبية' }
      ],
      'fruits': [
        { id: 'all', name: 'الكل' },
        { id: 'citrus', name: 'الحمضيات' },
        { id: 'tropical', name: 'الاستوائية' },
        { id: 'berries', name: 'التوتيات' },
        { id: 'stone', name: 'النواة' }
      ],
      'dairy': [
        { id: 'all', name: 'الكل' },
        { id: 'milk', name: 'الحليب' },
        { id: 'cheese', name: 'الأجبان' },
        { id: 'yogurt', name: 'الزبادي' },
        { id: 'butter', name: 'الزبدة' }
      ],
      'bakery': [
        { id: 'all', name: 'الكل' },
        { id: 'bread', name: 'الخبز' },
        { id: 'pastries', name: 'المعجنات' },
        { id: 'cakes', name: 'الكيك' },
        { id: 'cookies', name: 'البسكويت' }
      ],
      'meat': [
        { id: 'all', name: 'الكل' },
        { id: 'beef', name: 'اللحم البقري' },
        { id: 'lamb', name: 'الضأن' },
        { id: 'chicken', name: 'الدجاج' },
        { id: 'processed', name: 'المصنعة' }
      ],
      'fish': [
        { id: 'all', name: 'الكل' },
        { id: 'fresh', name: 'الطازجة' },
        { id: 'frozen', name: 'المجمدة' },
        { id: 'canned', name: 'المعلبة' },
        { id: 'smoked', name: 'المدخنة' }
      ]
    };
    return subcategoriesMap[categoryId] || [{ id: 'all', name: 'الكل' }];
  };

  // Products data based on category
  const getProducts = (categoryId, subcategoryId) => {
    const productsMap = {
      'vegetables': {
        'all': [
          { emoji: '🥬', name: 'خس', price: '2.75' },
          { emoji: '🍅', name: 'طماطم', price: '4.99' },
          { emoji: '🥒', name: 'خيار', price: '3.99' },
          { emoji: '🥕', name: 'جزر', price: '3.50' },
          { emoji: '🧅', name: 'بصل', price: '2.25' },
          { emoji: '🥔', name: 'بطاطس', price: '2.99' },
          { emoji: '🫑', name: 'فلفل', price: '5.50' },
          { emoji: '🥦', name: 'بروكلي', price: '6.99' },
          { emoji: '🥬', name: 'سبانخ', price: '3.25' }
        ],
        'leafy': [
          { emoji: '🥬', name: 'خس', price: '2.75' },
          { emoji: '🥬', name: 'سبانخ', price: '3.25' },
          { emoji: '🥬', name: 'جرجير', price: '4.50' }
        ],
        'root': [
          { emoji: '🥕', name: 'جزر', price: '3.50' },
          { emoji: '🥔', name: 'بطاطس', price: '2.99' },
          { emoji: '🧅', name: 'بصل', price: '2.25' }
        ]
      },
      'fruits': {
        'all': [
          { emoji: '🍎', name: 'تفاح', price: '5.99' },
          { emoji: '🍌', name: 'موز', price: '3.99' },
          { emoji: '🍊', name: 'برتقال', price: '4.50' },
          { emoji: '🍇', name: 'عنب', price: '6.99' },
          { emoji: '🍓', name: 'فراولة', price: '8.50' },
          { emoji: '🥝', name: 'كيوي', price: '7.25' },
          { emoji: '🍑', name: 'خوخ', price: '5.75' },
          { emoji: '🍒', name: 'كرز', price: '9.99' },
          { emoji: '🥭', name: 'مانجو', price: '6.50' }
        ],
        'citrus': [
          { emoji: '🍊', name: 'برتقال', price: '4.50' },
          { emoji: '🍋', name: 'ليمون', price: '3.25' },
          { emoji: '🍊', name: 'جريب فروت', price: '5.75' }
        ],
        'tropical': [
          { emoji: '🥭', name: 'مانجو', price: '6.50' },
          { emoji: '🍍', name: 'أناناس', price: '7.99' },
          { emoji: '🥥', name: 'جوز الهند', price: '8.50' }
        ]
      },
      'dairy': {
        'all': [
          { emoji: '🥛', name: 'حليب', price: '3.50' },
          { emoji: '🧀', name: 'جبن', price: '8.99' },
          { emoji: '🍶', name: 'زبادي', price: '2.75' },
          { emoji: '🧈', name: 'زبدة', price: '5.50' },
          { emoji: '🥛', name: 'كريمة', price: '4.25' },
          { emoji: '🧀', name: 'جبنة موزاريلا', price: '7.99' }
        ]
      }
    };
    
    const categoryProducts = productsMap[categoryId] || {};
    return categoryProducts[subcategoryId] || categoryProducts['all'] || [];
  };

  const subcategories = getSubcategories(categoryId);
  const products = getProducts(categoryId, selectedSubcategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    onAddToCart && onAddToCart(product);
  };

  const handleBuyNow = (product) => {
    console.log('Buy now:', product);
    // Here you would typically navigate to checkout
  };

  const handleNavigation = (screenId) => {
    if (screenId === 'categories') {
      onNavigate && onNavigate('categories');
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
            onClick={() => onNavigate && onNavigate('categories')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/>
            </svg>
          </BackButton>
          <HeaderTitle>{categoryName}</HeaderTitle>
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
          <SearchInput placeholder={`ابحث في ${categoryName}...`} />
        </SearchSection>

        {/* Subcategories Tabs */}
        <SubcategoriesSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SubcategoriesContainer>
            {subcategories.map((subcategory, index) => (
              <SubcategoryTab
                key={subcategory.id}
                active={selectedSubcategory === subcategory.id}
                onClick={() => setSelectedSubcategory(subcategory.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {subcategory.name}
              </SubcategoryTab>
            ))}
          </SubcategoriesContainer>
        </SubcategoriesSection>

        {/* Products Section */}
        <ProductsSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionTitle>المنتجات</SectionTitle>
          <ProductGrid>
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleProductClick(product)}
                style={{ cursor: 'pointer' }}
              >
                <ProductEmoji>{product.emoji}</ProductEmoji>
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
        </ProductsSection>
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
        onClick={() => onNavigate && onNavigate('cart')}
      >
        <CartIcon>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </CartIcon>
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
      </FloatingCart>

      {/* Product Details Modal */}
      <ProductDetails
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </MobileFrame>
  );
};

export default CategoryProducts;
