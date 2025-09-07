import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
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
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
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

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  color: #74308c;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

const SuccessIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2.5rem;
  animation: ${pulse} 2s infinite;
`;

const OrderNumber = styled.div`
  color: #74308c;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const VerificationCode = styled(motion.div)`
  background: linear-gradient(135deg, #74308c, #5a2470);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 8px 24px rgba(116, 48, 140, 0.3);
`;

const CodeLabel = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const CodeDigits = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  letter-spacing: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CodeInstructions = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  margin-top: 10px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const StatusCard = styled(motion.div)`
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(40, 167, 69, 0.3);
`;

const StatusIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const StatusText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const StatusSubtext = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  margin-top: 4px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const ActionButton = styled(motion.button)`
  flex: 1;
  background: ${props => props.primary ? 'linear-gradient(135deg, #74308c, #5a2470)' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.primary ? 'white' : '#74308c'};
  border: ${props => props.primary ? 'none' : '2px solid rgba(116, 48, 140, 0.3)'};
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(116, 48, 140, 0.3);
  }
`;

const ProductItem = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid rgba(116, 48, 140, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductEmoji = styled.div`
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(116, 48, 140, 0.1);
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductName = styled.div`
  color: #74308c;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ProductDetails = styled.div`
  color: #6c757d;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ProductTotal = styled.div`
  color: #74bd43;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const OrderSummary = styled.div`
  background: rgba(116, 48, 140, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-top: 15px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
    border-top: 1px solid rgba(116, 48, 140, 0.2);
    font-weight: 700;
    font-size: 1rem;
  }
`;

const SummaryLabel = styled.div`
  color: #2c3e50;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const SummaryValue = styled.div`
  color: ${props => props.isTotal ? '#74bd43' : '#2c3e50'};
  font-weight: ${props => props.isTotal ? '700' : '500'};
  font-size: ${props => props.isTotal ? '1rem' : '0.9rem'};
  font-family: ${theme.typography.fontFamily.arabic};
`;

const OrderConfirmationScreen = ({ onNavigate, orderData }) => {
  const [verificationCode] = React.useState(() => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  });

  const orderStatus = 'قيد التحضير';
  const estimatedTime = '30-45 دقيقة';

  const handleChangeOrder = () => {
    // Navigate back to checkout or cart
    onNavigate && onNavigate('checkout');
  };

  const handleTrackOrder = () => {
    // Navigate to order tracking
    onNavigate && onNavigate('orders');
  };

  const handleGoHome = () => {
    // Navigate to home
    onNavigate && onNavigate('home');
  };

  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleGoHome}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>تأكيد الطلب</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        {/* Success Section */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <SuccessIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ✅
          </SuccessIcon>
          
          <OrderNumber>
            تم تأكيد طلبك بنجاح!
          </OrderNumber>

          <VerificationCode
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CodeLabel>كود التحقق للعامل</CodeLabel>
            <CodeDigits>{verificationCode}</CodeDigits>
            <CodeInstructions>
              أعط هذا الكود للعامل عند التسليم
            </CodeInstructions>
          </VerificationCode>

          <StatusCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <StatusIcon>🍳</StatusIcon>
            <StatusText>{orderStatus}</StatusText>
            <StatusSubtext>الوقت المتوقع: {estimatedTime}</StatusSubtext>
          </StatusCard>

          <ActionButtons>
            <ActionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleChangeOrder}
            >
              تعديل الطلب
            </ActionButton>
            <ActionButton
              primary
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTrackOrder}
            >
              متابعة الطلب
            </ActionButton>
          </ActionButtons>
        </Section>

        {/* Order Details */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <SectionTitle>تفاصيل الطلب</SectionTitle>
          
          {orderData?.items?.map((item, index) => (
            <ProductItem
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <ProductEmoji>{item.emoji || '📦'}</ProductEmoji>
              
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <ProductDetails>
                  الكمية: {item.qty} × {(item.unitPrice || 0).toFixed(2)} ريال
                </ProductDetails>
              </ProductInfo>
              
              <ProductTotal>
                {(item.qty * (item.unitPrice || 0)).toFixed(2)} ريال
              </ProductTotal>
            </ProductItem>
          ))}

          <OrderSummary>
            <SummaryRow>
              <SummaryLabel>المجموع الفرعي</SummaryLabel>
              <SummaryValue>{(orderData?.subtotal || 0).toFixed(2)} ريال</SummaryValue>
            </SummaryRow>
            
            <SummaryRow>
              <SummaryLabel>رسوم التوصيل</SummaryLabel>
              <SummaryValue>
                {(orderData?.deliveryFee || 0) === 0 ? 'مجاناً' : `${(orderData?.deliveryFee || 0).toFixed(2)} ريال`}
              </SummaryValue>
            </SummaryRow>
            
            {(orderData?.couponDiscount || 0) > 0 && (
              <SummaryRow>
                <SummaryLabel>خصم الكوبون</SummaryLabel>
                <SummaryValue style={{ color: '#74bd43' }}>
                  -{(orderData?.couponDiscount || 0).toFixed(2)} ريال
                </SummaryValue>
              </SummaryRow>
            )}
            
            {(orderData?.loyaltyDiscount || 0) > 0 && (
              <SummaryRow>
                <SummaryLabel>خصم نقاط الولاء</SummaryLabel>
                <SummaryValue style={{ color: '#74bd43' }}>
                  -{(orderData?.loyaltyDiscount || 0).toFixed(2)} ريال
                </SummaryValue>
              </SummaryRow>
            )}
            
            <SummaryRow>
              <SummaryLabel>المجموع الكلي</SummaryLabel>
              <SummaryValue isTotal>{(orderData?.total || 0).toFixed(2)} ريال</SummaryValue>
            </SummaryRow>
          </OrderSummary>
        </Section>

        {/* Order Info */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <SectionTitle>معلومات الطلب</SectionTitle>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#2c3e50', fontSize: '0.9rem', fontFamily: theme.typography.fontFamily.arabic }}>
                رقم الطلب:
              </span>
              <span style={{ color: '#74308c', fontWeight: '700', fontSize: '0.9rem', fontFamily: theme.typography.fontFamily.arabic }}>
                #{Math.floor(Math.random() * 10000)}
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#2c3e50', fontSize: '0.9rem', fontFamily: theme.typography.fontFamily.arabic }}>
                تاريخ الطلب:
              </span>
              <span style={{ color: '#2c3e50', fontSize: '0.9rem', fontFamily: theme.typography.fontFamily.arabic }}>
                {new Date().toLocaleDateString('ar-SA')}
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#2c3e50', fontSize: '0.9rem', fontFamily: theme.typography.fontFamily.arabic }}>
                طريقة الدفع:
              </span>
              <span style={{ color: '#2c3e50', fontSize: '0.9rem', fontFamily: theme.typography.fontFamily.arabic }}>
                {orderData?.paymentMethod === 'cash' ? 'الدفع عند الاستلام' : 
                 orderData?.paymentMethod === 'card' ? 'بطاقة ائتمان' : 
                 orderData?.paymentMethod === 'stc' ? 'STC Pay' : 'الدفع عند الاستلام'}
              </span>
            </div>
          </div>
        </Section>
      </MainContent>
    </MobileFrame>
  );
};

export default OrderConfirmationScreen;
