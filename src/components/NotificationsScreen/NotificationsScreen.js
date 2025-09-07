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

const BellIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #74308c;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg { width: 28px; height: 28px; fill: #74308c; }
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

const Item = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(116, 48, 140, 0.15);
`;

const ItemIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(116, 48, 140, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  svg { width: 20px; height: 20px; fill: #74308c; }
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemTitle = styled.div`
  color: #74308c;
  font-weight: 700;
  font-size: 0.95rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ItemBody = styled.div`
  color: #2c3e50;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ItemTime = styled.div`
  color: #6c757d;
  font-size: 0.75rem;
`;

const NotificationsScreen = ({ onNavigate }) => {
  const notifications = [
    {
      id: 'n1',
      title: 'تم إضافة عرض جديد',
      body: 'خصم 20% على الفواكه الطازجة اليوم فقط.',
      time: 'قبل ساعتين'
    }
  ];
  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>الإشعارات</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        <List>
          {notifications.map((n, idx) => (
            <Item key={n.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}>
              <ItemIcon>
                <svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10 3.17 10 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
              </ItemIcon>
              <ItemText>
                <ItemTitle>{n.title}</ItemTitle>
                <ItemBody>{n.body}</ItemBody>
              </ItemText>
              <ItemTime>{n.time}</ItemTime>
            </Item>
          ))}
        </List>
      </MainContent>
    </MobileFrame>
  );
};

export default NotificationsScreen;


