import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
import logoSvg from '../../assets/logo.svg';

// Logo Container
const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0; /* Remove gap to bring elements closer */
`;

const LogoImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: none; /* Removed shadow */
  background: transparent; /* Removed white background */
  padding: 0; /* Removed padding */
`;

const LogoText = styled.div`
  font-family: ${theme.typography.fontFamily.arabic};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.brandGreen};
  text-align: center;
`;

const Logo = ({ logoSrc = null }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  const handleImageLoad = () => {
    console.log('Logo image loaded successfully!');
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    console.log('Logo image failed to load, showing fallback');
    setImageError(true);
  };
  
  // Use your actual logo as the default
  const logoSource = logoSrc || logoSvg;
  
  return (
    <LogoContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {!imageError && (
        <LogoImage
          src={logoSource}
          alt="SaptMarkets Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {/* Fallback SVG Logo */}
      {imageError && (
        <FallbackLogo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BasketIcon>
            <BasketSVG viewBox="0 0 24 24">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" />
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" />
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" />
            </BasketSVG>
            <LeafSVG viewBox="0 0 24 24">
              <path d="M6 3C6 3 7.5 4.5 9 6C10.5 7.5 12 9 12 9C12 9 10.5 10.5 9 12C7.5 13.5 6 15 6 15C6 15 4.5 13.5 3 12C1.5 10.5 0 9 0 9C0 9 1.5 7.5 3 6C4.5 4.5 6 3 6 3Z" />
            </LeafSVG>
          </BasketIcon>
          <LogoText>سبت</LogoText>
        </FallbackLogo>
      )}
    </LogoContainer>
  );
};

// Fallback Logo Components
const FallbackLogo = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.brand};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  width: 80px;
  height: 80px;
  justify-content: center;
`;

const BasketIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BasketSVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: ${theme.colors.brandGreen};
  stroke-width: 2;
`;

const LeafSVG = styled.svg`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  fill: ${theme.colors.brandGreen};
`;

export default Logo;
