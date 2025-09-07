import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

// Animations
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Overlay
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// Product Details Card
const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 350px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  direction: rtl;
`;

// Close Button
const CloseButton = styled(motion.button)`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 40px;
  height: 40px;
  background: rgba(116, 48, 140, 0.1);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(116, 48, 140, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #74308c;
  }
`;

// Product Image Section
const ImageSection = styled.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProductImage = styled.div`
  font-size: 4rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

// Content Section
const ContentSection = styled.div`
  padding: 20px;
`;

// Product Name
const ProductName = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 8px 0;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

// Product Description
const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0 0 15px 0;
  line-height: 1.5;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

// Price Section
const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
`;

const CurrentPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #74bd43;
`;

const OriginalPrice = styled.div`
  font-size: 1rem;
  color: #adb5bd;
  text-decoration: line-through;
`;

const DiscountBadge = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Quantity Section
const QuantitySection = styled.div`
  margin: 20px 0;
`;

const QuantityLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const QuantityButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border: 2px solid #74308c;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: #74308c;
  transition: all 0.3s ease;
  
  &:hover {
    background: #74308c;
    color: white;
    transform: scale(1.1);
  }
`;

const QuantityDisplay = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  min-width: 30px;
  text-align: center;
`;

// Unit Tabs Section
const UnitTabsSection = styled.div`
  margin: 15px 0;
`;

const UnitTabsLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

const UnitTabsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const UnitTab = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(135deg, #74308c, #5a2470)' : 'rgba(116, 48, 140, 0.1)'};
  color: ${props => props.active ? 'white' : '#74308c'};
  border: 2px solid ${props => props.active ? '#74308c' : 'rgba(116, 48, 140, 0.3)'};
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  min-width: 60px;
  text-align: center;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #74308c, #5a2470)' : 'rgba(116, 48, 140, 0.2)'};
    transform: translateY(-1px);
  }
`;

const UnitPrice = styled.div`
  font-size: 0.7rem;
  color: ${props => props.active ? 'rgba(255, 255, 255, 0.8)' : '#6c757d'};
  margin-top: 2px;
`;

// Action Buttons
const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const AddToCartButton = styled(motion.button)`
  flex: 1;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(116, 189, 67, 0.3);
  }
`;

const BuyNowButton = styled(motion.button)`
  flex: 1;
  background: linear-gradient(135deg, #74308c, #5a2470);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(116, 48, 140, 0.3);
  }
`;

// Product Details Component
const ProductDetails = ({ product, isOpen, onClose, onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedUnit, setSelectedUnit] = React.useState('kg');

  // Default unit options with prices
  const unitOptions = [
    { unit: 'kg', label: 'كيلو', price: parseFloat(product?.price || '0') },
    { unit: '500g', label: 'نصف كيلو', price: parseFloat(product?.price || '0') * 0.5 },
    { unit: '250g', label: 'ربع كيلو', price: parseFloat(product?.price || '0') * 0.25 },
    { unit: '100g', label: 'مئة جرام', price: parseFloat(product?.price || '0') * 0.1 },
    { unit: 'piece', label: 'حبة', price: parseFloat(product?.price || '0') * 0.3 }
  ];

  const currentUnit = unitOptions.find(unit => unit.unit === selectedUnit) || unitOptions[0];
  const currentPrice = (currentUnit.price * quantity).toFixed(2);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 100) {
      setQuantity(newQuantity);
    }
  };

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    setQuantity(1); // Reset quantity when changing unit
  };

  const handleAddToCart = () => {
    onAddToCart && onAddToCart({ 
      ...product, 
      quantity, 
      unit: selectedUnit,
      unitPrice: currentUnit.price,
      totalPrice: currentPrice
    });
    onClose();
  };

  const handleBuyNow = () => {
    onBuyNow && onBuyNow({ 
      ...product, 
      quantity, 
      unit: selectedUnit,
      unitPrice: currentUnit.price,
      totalPrice: currentPrice
    });
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ProductCard
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </CloseButton>

        <ImageSection>
          <ProductImage>{product.emoji}</ProductImage>
        </ImageSection>

        <ContentSection>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>
            منتج طازج وعالي الجودة من أفضل المزارع المحلية. يتميز بطعمه اللذيذ وفوائده الغذائية العالية.
          </ProductDescription>

          <PriceSection>
            <CurrentPrice>{currentPrice} ريال</CurrentPrice>
            {product.originalPrice && (
              <>
                <OriginalPrice>{product.originalPrice} ريال</OriginalPrice>
                <DiscountBadge>
                  خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </DiscountBadge>
              </>
            )}
          </PriceSection>

          <UnitTabsSection>
            <UnitTabsLabel>اختر الوحدة:</UnitTabsLabel>
            <UnitTabsContainer>
              {unitOptions.map((unitOption) => (
                <UnitTab
                  key={unitOption.unit}
                  active={selectedUnit === unitOption.unit}
                  onClick={() => handleUnitChange(unitOption.unit)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div>{unitOption.label}</div>
                  <UnitPrice active={selectedUnit === unitOption.unit}>
                    {unitOption.price.toFixed(2)} ريال
                  </UnitPrice>
                </UnitTab>
              ))}
            </UnitTabsContainer>
          </UnitTabsSection>

          <QuantitySection>
            <QuantityLabel>الكمية:</QuantityLabel>
            <QuantityControls>
              <QuantityButton
                onClick={() => handleQuantityChange(-1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                -
              </QuantityButton>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <QuantityButton
                onClick={() => handleQuantityChange(1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </QuantityButton>
            </QuantityControls>
          </QuantitySection>

          <ActionButtons>
            <AddToCartButton
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              أضف للسلة
            </AddToCartButton>
            <BuyNowButton
              onClick={handleBuyNow}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              اشتر الآن
            </BuyNowButton>
          </ActionButtons>
        </ContentSection>
      </ProductCard>
    </Overlay>
  );
};

export default ProductDetails;
