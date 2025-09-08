import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import FeatureCard from '../FeatureCard/FeatureCard';
import { productEmojis, featureEmojis, getRandomEmoji } from '../../utils/emojiLibrary';
import logoSvg from '../../assets/logo.svg';

// Animations
const float = keyframes`
  0% { transform: translateY(-20vh) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
`;

const fallIntoCart = keyframes`
  0% { 
    transform: translateY(-20vh) translateX(var(--start-x)) rotate(0deg);
    opacity: 0.1;
  }
  80% { 
    transform: translateY(80vh) translateX(var(--cart-x)) rotate(360deg);
    opacity: 0.1;
  }
  100% { 
    transform: translateY(120vh) translateX(var(--cart-x)) rotate(360deg);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

// Mobile Frame Container
const MobileFrame = styled(motion.div)`
  width: 375px;
  height: 812px;
  margin: 20px auto;
  background: linear-gradient(135deg, rgba(116, 48, 140, 0.2) 0%, rgba(116, 189, 67, 0.2) 100%);
  backdrop-filter: blur(20px);
  border-radius: 40px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 400px) {
    width: 95%;
    height: 100vh;
    margin: 0;
    border-radius: 0;
    padding: 15px;
  }
`;

// Animated Background
const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const FloatingItem = styled.div`
  position: absolute;
  opacity: 0.1;
  animation: ${fallIntoCart} 20s infinite linear;
  font-size: 2rem;
  color: white;
  
  /* Start positions - spread across the top */
  &:nth-child(1) { 
    left: 10%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: 0s; 
  }
  &:nth-child(2) { 
    left: 80%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -5s; 
  }
  &:nth-child(3) { 
    left: 50%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -10s; 
  }
  &:nth-child(4) { 
    left: 20%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -15s; 
  }
  &:nth-child(5) { 
    left: 70%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -7s; 
  }
  &:nth-child(6) { 
    left: 30%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -12s; 
  }
  &:nth-child(7) { 
    left: 90%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -3s; 
  }
  &:nth-child(8) { 
    left: 40%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -18s; 
  }
  &:nth-child(9) { 
    left: 15%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -2s; 
  }
  &:nth-child(10) { 
    left: 85%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -8s; 
  }
  &:nth-child(11) { 
    left: 25%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -13s; 
  }
  &:nth-child(12) { 
    left: 75%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -4s; 
  }
  &:nth-child(13) { 
    left: 35%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -16s; 
  }
  &:nth-child(14) { 
    left: 65%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -9s; 
  }
  &:nth-child(15) { 
    left: 45%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -11s; 
  }
  &:nth-child(16) { 
    left: 55%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -6s; 
  }
  &:nth-child(17) { 
    left: 5%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -14s; 
  }
  &:nth-child(18) { 
    left: 95%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -1s; 
  }
  &:nth-child(19) { 
    left: 60%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -17s; 
  }
  &:nth-child(20) { 
    left: 80%; 
    --start-x: 0px;
    --cart-x: 0px;
    animation-delay: -19s; 
  }
`;

// Products Inside Cart
const CartProducts = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 2;
  pointer-events: none;
`;

const CartProduct = styled.div`
  font-size: 1.5rem;
  opacity: 0.6;
  margin: 5px;
  animation: ${pulse} 4s ease-in-out infinite;
  
  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.5s; }
  &:nth-child(3) { animation-delay: 1s; }
  &:nth-child(4) { animation-delay: 1.5s; }
  &:nth-child(5) { animation-delay: 2s; }
  &:nth-child(6) { animation-delay: 2.5s; }
  &:nth-child(7) { animation-delay: 3s; }
  &:nth-child(8) { animation-delay: 3.5s; }
`;

// Glass Container
const GlassContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 30px 0px 30px; /* Remove bottom padding */
`;

// Header Section
const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`;

const AppIcon = styled(motion.div)`
  width: 100vw; /* Full viewport width */
  height: 200px;
  background: rgba(255, 255, 255, 0.1); /* Subtle white background */
  backdrop-filter: blur(10px); /* Light blur effect */
  border-radius: 20px; /* Rounded corners like other containers */
  margin: 0; /* Reset margins */
  margin-top: -60px; /* Remove MobileFrame padding (20px) + GlassContainer padding (40px) */
  margin-left: calc(-50vw + 50%); /* Center the container and extend to full screen width */
  display: flex;
  flex-direction: column; /* Stack logo and title vertically */
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border */
  box-shadow: 0 8px 32px rgba(0,0,0,0.1); /* Subtle shadow */
  animation: ${pulse} 3s ease-in-out infinite;
`;

const AppTitle = styled(motion.h1)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 5px 0 0 0; /* Reduced margin to bring closer to logo */
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  font-family: ${theme.typography.fontFamily.arabic};
`;

const AppSubtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: #74308c;
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
  font-family: ${theme.typography.fontFamily.arabic};
`;

// Center Section Container
const CenterSection = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 2px;
  right: 2px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

// Bottom Section Container
const BottomSection = styled(motion.div)`
  position: absolute;
  bottom: -10px;
  left: 2px;
  right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px; /* Small gap between button and cart */
`;

// Features Section
const Features = styled(motion.div)`
  display: flex;
  gap: 30px;
  margin: 0; /* Remove all margins */
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 25px 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  min-height: 120px;
`;

const FeatureCardGlass = styled(motion.div)`
  text-align: center;
  flex: 1;
  transition: all 0.4s ease;
  animation: ${slideUp} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:nth-child(1) { 
    animation-delay: 0.2s; 
    animation: ${slideUp} 0.8s ease-out 0.2s both;
  }
  &:nth-child(2) { 
    animation-delay: 0.4s; 
    animation: ${slideUp} 0.8s ease-out 0.4s both;
  }
  &:nth-child(3) { 
    animation-delay: 0.6s; 
    animation: ${slideUp} 0.8s ease-out 0.6s both;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    .feature-icon {
      transform: scale(1.1) rotate(5deg);
    }
    .feature-title {
      color: #8e24aa;
    }
    .feature-subtitle {
      color: #8e24aa;
    }
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  transition: all 0.4s ease;
  
  &.fresh { background: linear-gradient(135deg, #10B981, #059669); }
  &.quality { background: linear-gradient(135deg, #F59E0B, #D97706); }
  &.fast { background: linear-gradient(135deg, #3B82F6, #1D4ED8); }
`;

const FeatureTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #74308c;
  margin-bottom: 6px;
  font-family: ${theme.typography.fontFamily.arabic};
  line-height: 1.2;
  max-width: 100%;
  word-wrap: break-word;
  transition: all 0.4s ease;
`;

const FeatureSubtitle = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #74308c;
  font-family: ${theme.typography.fontFamily.arabic};
  line-height: 1.2;
  max-width: 100%;
  word-wrap: break-word;
  transition: all 0.4s ease;
`;

// CTA Button
const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  pointer-events: auto;
  width: 100%;
  max-width: 300px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(116, 189, 67, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0; /* Remove all margins */
  animation: ${fadeIn} 1s ease-out 0.8s both;
  position: relative;
  z-index: 10;
  overflow: hidden;
  
  /* Shining shadow effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 50px rgba(116, 189, 67, 0.5);
    background: linear-gradient(135deg, #85d454, #6bb344);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

// Big Cart Icon
const BigCartIcon = styled(motion.div)`
  font-size: 8rem;
  margin-bottom: 0px;
  animation: ${pulse} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  opacity: 0.3;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Bottom Features
const BottomFeatures = styled(motion.div)`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const BottomFeature = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  flex: 1;
  animation: ${slideUp} 0.8s ease-out 1s both;
  
  &:nth-child(2) { animation-delay: 1.2s; }
`;

const BottomFeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  
  &.organic { background: linear-gradient(135deg, #10B981, #059669); }
  &.service { background: linear-gradient(135deg, #3B82F6, #1D4ED8); }
`;

const BottomFeatureTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin-bottom: 5px;
  text-shadow: 0 1px 8px rgba(5, 150, 105, 0.3);
`;

const BottomFeatureSubtitle = styled.div`
  font-size: 0.8rem;
  color: rgba(209, 250, 229, 0.8);
`;

const WelcomeScreen = ({ onGetStarted }) => {
  const features = [
    { icon: featureEmojis.fresh, title: 'طازج', subtitle: 'منتجات', className: 'fresh' },
    { icon: featureEmojis.premium, title: 'مميز', subtitle: 'جودة', className: 'quality' },
    { icon: featureEmojis.delivery, title: 'سريع', subtitle: 'توصيل', className: 'fast' }
  ];

  const bottomFeatures = [
    { icon: featureEmojis.organic, title: 'Organic', subtitle: 'Natural Options', className: 'organic' },
    { icon: featureEmojis.secure, title: 'Secure', subtitle: 'Safe Shopping', className: 'service' }
  ];

  // Create a diverse array of product emojis for floating background
  const floatingItems = [
    // Fresh Produce - More variety
    ...productEmojis.freshProduce.vegetables.slice(0, 6),
    ...productEmojis.freshProduce.fruits.slice(0, 6),
    // Dairy & Eggs
    ...productEmojis.dairy.milk.slice(0, 2),
    ...productEmojis.dairy.cheese.slice(0, 2),
    ...productEmojis.dairy.eggs.slice(0, 2),
    // Meat & Fish
    ...productEmojis.meatFish.beef.slice(0, 2),
    ...productEmojis.meatFish.fish.slice(0, 2),
    ...productEmojis.meatFish.seafood.slice(0, 3),
    // Grains & Bread
    ...productEmojis.grains.bread.slice(0, 4),
    // Beverages
    ...productEmojis.beverages.cold.slice(0, 3),
    ...productEmojis.beverages.hot.slice(0, 2),
    // Snacks
    ...productEmojis.snacks.chips.slice(0, 2),
    ...productEmojis.snacks.candy.slice(0, 3),
    // Frozen Foods
    ...productEmojis.frozen.iceCream.slice(0, 2)
  ];

  return (
    <MobileFrame
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <BackgroundAnimation>
        {floatingItems.map((item, index) => (
          <FloatingItem key={index}>{item}</FloatingItem>
        ))}
      </BackgroundAnimation>

      <GlassContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Header */}
        <Header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
                     <AppIcon
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
           >
             {/* Logo and Text Container - Inside the AppIcon */}
             <div style={{ 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center',
               justifyContent: 'center',
               gap: '0px', /* No gap between logo and text */
               margin: '0px',
               padding: '0px',
               width: '100%',
               height: '100%'
             }}>
               {/* Logo Image */}
               <img 
                 src={logoSvg} 
                 alt="SaptMarkets Logo"
                 style={{ 
                   width: '180px', 
                   height: '180px', 
                   objectFit: 'contain',
                   margin: '0',
                   padding: '0'
                 }}
               />
               
               {/* Arabic Title - Very Close to Logo */}
               <div style={{
                 fontSize: '1.5rem',
                 fontWeight: '700',
                 margin: '0px',
                 padding: '0px',
                 fontFamily: theme.typography.fontFamily.arabic,
                 lineHeight: '1',
                 marginTop: '-25px' /* Much more negative margin to bring it very close */
               }}>
                 <span style={{ color: '#74bd43' }}>اسواق</span>{' '}
                 <span style={{ color: '#74308c' }}>سبت</span>{' '}
                 <span style={{ color: '#74bd43' }}>المركزية</span>
               </div>
             </div>
           </AppIcon>
          
                     <AppSubtitle
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 1.0 }}
           >
             كل اللي تبيه نلبيه
           </AppSubtitle>
        </Header>

        {/* Center Section - Features */}
        <CenterSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {/* Features */}
          <Features
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <FeatureCardGlass
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <FeatureIcon className={feature.className}>
                  {feature.icon}
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
              </FeatureCardGlass>
            ))}
          </Features>
        </CenterSection>

        {/* Bottom Section - CTA Button and Cart */}
        <BottomSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {/* CTA Button */}
          <CTAButton
            onClick={() => {
              console.log('CTA Button clicked!');
              onGetStarted && onGetStarted();
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <span>←</span>
            <span style={{ fontFamily: theme.typography.fontFamily.arabic }}>ابدأ التسوق</span>
          </CTAButton>
          
          {/* Big Cart Icon */}
          <BigCartIcon
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            🛒
          </BigCartIcon>
        </BottomSection>
      </GlassContainer>
    </MobileFrame>
  );
};

export default WelcomeScreen;
