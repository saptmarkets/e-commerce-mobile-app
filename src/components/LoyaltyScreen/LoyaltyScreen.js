import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';
import BottomNavigation from '../BottomNavigation';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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

const MainContent = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background: linear-gradient(135deg, #74308c, #5a2470);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
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
  
  &:hover { background: rgba(255, 255, 255, 0.3); transform: scale(1.1); }
  svg { width: 20px; height: 20px; fill: white; }
`;

const HeaderTitle = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
  flex: 1;
`;

const SummaryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const Balance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BalanceLabel = styled.div`
  color: #6c757d;
  font-size: 0.8rem;
`;

const BalanceValue = styled.div`
  color: #74bd43;
  font-size: 1.6rem;
  font-weight: 800;
`;

const Tier = styled.div`
  background: linear-gradient(135deg, rgba(116,48,140,0.1), rgba(116,48,140,0.2));
  border: 1px solid rgba(116,48,140,0.25);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TierLabel = styled.div`
  color: #74308c;
  font-weight: 700;
`;

const TierProgress = styled.div`
  height: 10px;
  background: rgba(116,48,140,0.15);
  border-radius: 999px;
  overflow: hidden;
`;

const TierBar = styled.div`
  width: 60%;
  height: 100%;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ActionButton = styled(motion.button)`
  border: 1px solid rgba(116,48,140,0.25);
  background: white;
  color: #74308c;
  border-radius: 14px;
  padding: 10px 12px;
  font-weight: 700;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HistoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  
  /* Custom scrollbar */
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

const ScrollButton = styled(motion.button)`
  background: linear-gradient(135deg, #74308c, #5a2470);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(116, 48, 140, 0.3);
  margin: 10px auto 0;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(116, 48, 140, 0.4);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid rgba(116,48,140,0.15);
  border-radius: 14px;
  background: rgba(255,255,255,0.8);
  animation: ${fadeIn} 0.4s ease ${props => props.$delay || 0}s both;
`;

const RowText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RowTitle = styled.div`
  color: #2c3e50;
  font-weight: 700;
`;

const RowSub = styled.div`
  color: #6c757d;
  font-size: 0.8rem;
`;

const RowPoints = styled.div`
  color: #74bd43;
  font-weight: 800;
`;

const LoyaltyCard = styled(motion.div)`
  background: 
    linear-gradient(135deg, #74308c, #5a2470, #8b4cb8),
    repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.1) 3px, rgba(0, 0, 0, 0.1) 6px);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  padding: 24px 20px;
  color: white;
  width: 300px;
  height: 190px;
  box-shadow: 
    0 10px 30px rgba(116, 48, 140, 0.4),
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* Golden ribbon stripe */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #FFD700, #FFA500);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StarEmoji = styled.div`
  position: absolute;
  color: #FFD700;
  font-size: ${props => props.$size}px;
  opacity: ${props => props.$opacity};
  text-shadow: 
    0 0 8px rgba(255, 215, 0, 0.8),
    0 0 16px rgba(255, 215, 0, 0.6),
    0 0 24px rgba(255, 215, 0, 0.4),
    0 1px 2px rgba(0, 0, 0, 0.3);
  filter: blur(0.5px);
  pointer-events: none;
  z-index: 1;
`;

const RedRibbonVertical = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(180deg, #FFD700, #FFA500);
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
`;

const GoldenSeal = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, #FFD700, #FFA500);
  border-radius: 50%;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  
  &::before {
    content: '★';
    color: white;
    font-size: 20px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const CardSlogan = styled.div`
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  font-family: ${theme.typography.fontFamily.arabic};
  color: #FFD700;
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 1px 0 rgba(255, 255, 255, 0.2);
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
  text-align: right;
  opacity: 0.9;
`;

const CardBrand = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.5px;
  font-family: ${theme.typography.fontFamily.arabic};
  color: #FFD700;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.3);
  margin-bottom: 8px;
  position: relative;
  z-index: 2;
  text-align: right;
`;

const CardPhoneLabel = styled.div`
  font-size: 0.7rem;
  opacity: 0.9;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-bottom: 6px;
  position: relative;
  z-index: 2;
  color: #FFD700;
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 1px 0 rgba(255, 255, 255, 0.2);
  text-align: right;
`;

const CardPhone = styled.div`
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #FFD700;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.6),
    0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.2));
  text-align: center;
  margin-top: 8px;
`;

const LoyaltyScreen = ({ onNavigate, phoneNumber }) => {
  const pointsBalance = 1240;
  const history = [
    { id: 'p1', title: 'طلب رقم #12345', sub: '05 Sep 2025', points: '+120' },
    { id: 'p2', title: 'استخدام نقاط', sub: '03 Sep 2025', points: '-60' },
    { id: 'p3', title: 'طلب رقم #12340', sub: '31 Aug 2025', points: '+80' },
    { id: 'p4', title: 'طلب رقم #12335', sub: '28 Aug 2025', points: '+95' },
    { id: 'p5', title: 'استخدام نقاط', sub: '25 Aug 2025', points: '-40' },
    { id: 'p6', title: 'طلب رقم #12330', sub: '22 Aug 2025', points: '+150' }
  ];
  const displayPhone = phoneNumber && phoneNumber.trim() !== '' ? phoneNumber : '0501234567';

  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>نقاط الولاء</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        <CardContainer>
          <LoyaltyCard initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <RedRibbonVertical />
            <GoldenSeal />
            
            {/* Star emojis scattered across the left side of the card with 3D depth effect */}
            {/* Foreground stars - larger, more opaque */}
            <StarEmoji $size={16} $opacity={0.8} style={{ top: '12%', left: '8%' }}>★</StarEmoji>
            <StarEmoji $size={14} $opacity={0.7} style={{ top: '35%', left: '15%' }}>★</StarEmoji>
            <StarEmoji $size={18} $opacity={0.9} style={{ top: '65%', left: '12%' }}>★</StarEmoji>
            <StarEmoji $size={15} $opacity={0.8} style={{ top: '80%', left: '18%' }}>★</StarEmoji>
            <StarEmoji $size={13} $opacity={0.7} style={{ top: '45%', left: '25%' }}>★</StarEmoji>
            
            {/* Mid-ground stars - medium size and opacity */}
            <StarEmoji $size={11} $opacity={0.6} style={{ top: '22%', left: '25%' }}>★</StarEmoji>
            <StarEmoji $size={10} $opacity={0.5} style={{ top: '55%', left: '30%' }}>★</StarEmoji>
            <StarEmoji $size={12} $opacity={0.6} style={{ top: '75%', left: '35%' }}>★</StarEmoji>
            <StarEmoji $size={9} $opacity={0.5} style={{ top: '30%', left: '40%' }}>★</StarEmoji>
            <StarEmoji $size={11} $opacity={0.6} style={{ top: '60%', left: '45%' }}>★</StarEmoji>
            <StarEmoji $size={10} $opacity={0.5} style={{ top: '85%', left: '35%' }}>★</StarEmoji>
            
            {/* Background stars - smaller, more transparent */}
            <StarEmoji $size={6} $opacity={0.3} style={{ top: '18%', left: '50%' }}>★</StarEmoji>
            <StarEmoji $size={7} $opacity={0.35} style={{ top: '40%', left: '55%' }}>★</StarEmoji>
            <StarEmoji $size={5} $opacity={0.25} style={{ top: '70%', left: '60%' }}>★</StarEmoji>
            <StarEmoji $size={8} $opacity={0.4} style={{ top: '25%', left: '45%' }}>★</StarEmoji>
            <StarEmoji $size={6} $opacity={0.3} style={{ top: '50%', left: '40%' }}>★</StarEmoji>
            <StarEmoji $size={7} $opacity={0.35} style={{ top: '90%', left: '50%' }}>★</StarEmoji>
            <StarEmoji $size={5} $opacity={0.25} style={{ top: '15%', left: '35%' }}>★</StarEmoji>
            <StarEmoji $size={8} $opacity={0.4} style={{ top: '65%', left: '50%' }}>★</StarEmoji>
            
            <CardBrand>اسواق سبت المركزية</CardBrand>
            <CardSlogan>اكسب النقاط أثناء التسوق</CardSlogan>
            <CardPhoneLabel>رقم العميل</CardPhoneLabel>
            <CardPhone>{displayPhone}</CardPhone>
          </LoyaltyCard>
        </CardContainer>

          <SummaryCard initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Balance>
              <BalanceLabel>الرصيد الحالي</BalanceLabel>
              <BalanceValue>{pointsBalance} نقطة</BalanceValue>
            </Balance>
            <Actions style={{ gridColumn: '1 / -1' }}>
              <ActionButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>استبدال النقاط</ActionButton>
              <ActionButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>طرق كسب النقاط</ActionButton>
            </Actions>
          </SummaryCard>

        <HistoryCard initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          {history.map((h, idx) => (
            <Row key={h.id} $delay={0.1 + idx * 0.05}>
              <RowText>
                <RowTitle>{h.title}</RowTitle>
                <RowSub>{h.sub}</RowSub>
              </RowText>
              <RowPoints>{h.points}</RowPoints>
            </Row>
          ))}
        </HistoryCard>
        
        <ScrollButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </ScrollButton>
      </MainContent>
      
      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen="loyalty" 
        onNavigate={onNavigate} 
      />
    </MobileFrame>
  );
};

export default LoyaltyScreen;


