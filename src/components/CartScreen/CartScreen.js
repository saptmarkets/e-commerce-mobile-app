import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

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
  padding: 12px 20px;
  background: linear-gradient(135deg, #74308c, #5a2470);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const HeaderTitle = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
  flex: 1;
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
  
  svg { width: 20px; height: 20px; fill: white; }
`;

const EmptyState = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
`;

const List = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto auto;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid rgba(116, 48, 140, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
`;

const Name = styled.div`
  color: #74308c;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const Price = styled.div`
  color: #2c3e50;
  font-size: 0.9rem;
`;

const Qty = styled.div`
  color: #6c757d;
  font-size: 0.85rem;
`;

const LineTotal = styled.div`
  color: #74bd43;
  font-weight: 700;
`;

const QtyControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const IconButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid rgba(116, 48, 140, 0.25);
  background: white;
  color: #74308c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
`;

const EmptyIcon = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #74bd43;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg { width: 28px; height: 28px; fill: #74bd43; }
`;

const EmptyTitle = styled.div`
  color: #74308c;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const EmptySubtitle = styled.div`
  color: #6c757d;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const GoShopButton = styled(motion.button)`
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
  border-radius: 14px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const CheckoutSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(116, 48, 140, 0.1);
`;

const TotalLabel = styled.div`
  color: #74308c;
  font-weight: 700;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const TotalAmount = styled.div`
  color: #74bd43;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const CheckoutButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #74308c, #5a2470);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  box-shadow: 0 4px 16px rgba(116, 48, 140, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(116, 48, 140, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CartScreen = ({ onNavigate, items = [], onIncrement, onDecrement, onRemove, onCheckout }) => {
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.qty * (Number(i.unitPrice) || 0), 0);

  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>سلة التسوق</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        {items.length === 0 ? (
          <EmptyState initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <EmptyIcon>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </EmptyIcon>
            <EmptyTitle>سلة التسوق فارغة</EmptyTitle>
            <EmptySubtitle>ابدأ التسوق وأضف منتجات إلى سلتك</EmptySubtitle>
            <GoShopButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
              تسوق الآن
            </GoShopButton>
          </EmptyState>
        ) : (
          <>
            <List>
              {items.map(item => (
                <Row key={item.id}>
                  <Name>{item.name}</Name>
                  <Price>
                    <span className="font-saudi_riyal">{'\uE900'}</span>
                    {` ${(item.unitPrice || 0).toFixed(2)}`}
                  </Price>
                  <QtyControls>
                    <IconButton whileTap={{ scale: 0.95 }} onClick={() => onDecrement && onDecrement(item.id)}>-</IconButton>
                    <Qty>{item.qty}</Qty>
                    <IconButton whileTap={{ scale: 0.95 }} onClick={() => onIncrement && onIncrement(item.id)}>+</IconButton>
                  </QtyControls>
                  <LineTotal>
                    <span className="font-saudi_riyal">{'\uE900'}</span>
                    {` ${(item.qty * (item.unitPrice || 0)).toFixed(2)}`}
                  </LineTotal>
                  <IconButton whileTap={{ scale: 0.95 }} onClick={() => onRemove && onRemove(item.id)}>×</IconButton>
                </Row>
              ))}
            </List>
            
            <CheckoutSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TotalRow>
                <TotalLabel>المجموع الكلي</TotalLabel>
                <TotalAmount>
                  <span className="font-saudi_riyal">{'\uE900'}</span>
                  {` ${subtotal.toFixed(2)}`}
                </TotalAmount>
              </TotalRow>
              <CheckoutButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onCheckout && onCheckout(items);
                }}
              >
                إتمام الطلب
              </CheckoutButton>
            </CheckoutSection>
          </>
        )}
      </MainContent>
    </MobileFrame>
  );
};

export default CartScreen;


