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

const List = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
  align-items: center;
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(116, 48, 140, 0.15);
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const OrderTitle = styled.div`
  color: #74308c;
  font-weight: 700;
  font-size: 0.95rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const OrderSub = styled.div`
  color: #2c3e50;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const Status = styled.div`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: ${props => (
    props.type === 'completed' ? '#28a745' : props.type === 'pending' ? '#ffc107' : '#dc3545'
  )};
`;

const Amount = styled.div`
  color: #74bd43;
  font-weight: 700;
`;

const OrdersScreen = ({ onNavigate }) => {
  const orders = [
    { id: 'SO-1001', date: '2025-09-07', total: 35.97, status: 'completed' },
    { id: 'SO-1002', date: '2025-09-06', total: 12.50, status: 'pending' },
    { id: 'SO-1003', date: '2025-09-05', total: 27.10, status: 'cancelled' }
  ];

  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>طلباتي</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        <List>
          {orders.map((o, idx) => (
            <Row key={o.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}>
              <OrderInfo>
                <OrderTitle>رقم الطلب: {o.id}</OrderTitle>
                <OrderSub>التاريخ: {o.date}</OrderSub>
              </OrderInfo>
              <Status type={o.status}>{o.status === 'completed' ? 'مكتمل' : o.status === 'pending' ? 'قيد المعالجة' : 'ملغي'}</Status>
              <Amount>{o.total.toFixed(2)} ريال</Amount>
            </Row>
          ))}
        </List>
      </MainContent>
    </MobileFrame>
  );
};

export default OrdersScreen;


