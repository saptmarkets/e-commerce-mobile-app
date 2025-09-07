import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../theme';
import LoginRegisterScreen from '../LoginRegisterScreen';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  margin: 20px 20px 0 20px;
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

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  overflow-y: auto;
  
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

const ProfileHeader = styled(motion.div)`
  background: linear-gradient(135deg, #74308c, #5a2470);
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(116, 48, 140, 0.3);
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 15px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`;

const ProfileName = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ProfilePhone = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ProfileStatus = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 8px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const MenuSection = styled(motion.div)`
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

const MenuItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  cursor: pointer;
  border-bottom: 1px solid rgba(116, 48, 140, 0.1);
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(116, 48, 140, 0.05);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.bgColor || 'rgba(116, 48, 140, 0.1)'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const MenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MenuTitle = styled.div`
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const MenuSubtitle = styled.div`
  color: #6c757d;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const MenuArrow = styled.div`
  color: #6c757d;
  font-size: 1.2rem;
`;

const LogoutButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  margin-top: 10px;
  box-shadow: 0 4px 16px rgba(220, 53, 69, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
  }
`;

const LoginButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  margin-top: 10px;
  box-shadow: 0 4px 16px rgba(116, 189, 67, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(116, 189, 67, 0.4);
  }
`;

const UserProfileScreen = ({ onNavigate, userData, isLoggedIn, onLogout }) => {
  const [showLoginRegister, setShowLoginRegister] = React.useState(false);
  const [loginMode, setLoginMode] = React.useState('login'); // 'login' or 'register'

  const handleLogin = () => {
    setLoginMode('login');
    setShowLoginRegister(true);
  };

  const handleRegister = () => {
    setLoginMode('register');
    setShowLoginRegister(true);
  };

  const handleLogout = () => {
    onLogout && onLogout();
  };

  const handleLoginSuccess = () => {
    setShowLoginRegister(false);
    onNavigate && onNavigate('home');
  };

  const handleBackFromLogin = () => {
    setShowLoginRegister(false);
  };

  const handleMenuClick = (menuItem) => {
    console.log('Menu clicked:', menuItem);
    // Here you would handle navigation to different profile sections
    switch (menuItem) {
      case 'profile':
        // Navigate to profile edit screen
        break;
      case 'orders':
        onNavigate && onNavigate('orders');
        break;
      case 'loyalty':
        onNavigate && onNavigate('loyalty');
        break;
      case 'notifications':
        onNavigate && onNavigate('notifications');
        break;
      case 'settings':
        // Navigate to settings screen
        break;
      case 'help':
        // Navigate to help screen
        break;
      case 'about':
        // Navigate to about screen
        break;
      default:
        break;
    }
  };

  const profileMenuItems = [
    {
      id: 'profile',
      title: 'تعديل الملف الشخصي',
      subtitle: 'تحديث معلوماتك الشخصية',
      icon: '👤',
      bgColor: 'rgba(116, 48, 140, 0.1)'
    },
    {
      id: 'orders',
      title: 'طلباتي',
      subtitle: 'عرض جميع طلباتك',
      icon: '📦',
      bgColor: 'rgba(116, 189, 67, 0.1)'
    },
    {
      id: 'loyalty',
      title: 'نقاط الولاء',
      subtitle: 'عرض نقاطك ومرتبتك',
      icon: '⭐',
      bgColor: 'rgba(255, 193, 7, 0.1)'
    },
    {
      id: 'notifications',
      title: 'الإشعارات',
      subtitle: 'إدارة إشعاراتك',
      icon: '🔔',
      bgColor: 'rgba(13, 202, 240, 0.1)'
    }
  ];

  const settingsMenuItems = [
    {
      id: 'settings',
      title: 'الإعدادات',
      subtitle: 'تخصيص التطبيق',
      icon: '⚙️',
      bgColor: 'rgba(108, 117, 125, 0.1)'
    },
    {
      id: 'help',
      title: 'المساعدة والدعم',
      subtitle: 'احصل على المساعدة',
      icon: '❓',
      bgColor: 'rgba(13, 202, 240, 0.1)'
    },
    {
      id: 'about',
      title: 'حول التطبيق',
      subtitle: 'معلومات التطبيق',
      icon: 'ℹ️',
      bgColor: 'rgba(116, 48, 140, 0.1)'
    }
  ];

  return (
    <>
      {showLoginRegister ? (
        <LoginRegisterScreen
          onNavigate={handleLoginSuccess}
          mode={loginMode}
        />
      ) : (
        <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>الملف الشخصي</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        <ProfileContainer>
          {isLoggedIn ? (
            <>
              {/* Profile Header */}
              <ProfileHeader
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ProfileAvatar>👤</ProfileAvatar>
                <ProfileName>{userData?.name || 'أحمد محمد'}</ProfileName>
                <ProfilePhone>{userData?.phone || '+966 50 123 4567'}</ProfilePhone>
                <ProfileStatus>عضو منذ يناير 2024</ProfileStatus>
              </ProfileHeader>

              {/* Profile Menu */}
              <MenuSection
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SectionTitle>الحساب</SectionTitle>
                {profileMenuItems.map((item, index) => (
                  <MenuItem
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <MenuIcon bgColor={item.bgColor}>{item.icon}</MenuIcon>
                    <MenuContent>
                      <MenuTitle>{item.title}</MenuTitle>
                      <MenuSubtitle>{item.subtitle}</MenuSubtitle>
                    </MenuContent>
                    <MenuArrow>›</MenuArrow>
                  </MenuItem>
                ))}
              </MenuSection>

              {/* Settings Menu */}
              <MenuSection
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SectionTitle>عام</SectionTitle>
                {settingsMenuItems.map((item, index) => (
                  <MenuItem
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <MenuIcon bgColor={item.bgColor}>{item.icon}</MenuIcon>
                    <MenuContent>
                      <MenuTitle>{item.title}</MenuTitle>
                      <MenuSubtitle>{item.subtitle}</MenuSubtitle>
                    </MenuContent>
                    <MenuArrow>›</MenuArrow>
                  </MenuItem>
                ))}
              </MenuSection>

              {/* Logout Button */}
              <LogoutButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogout}
              >
                تسجيل الخروج
              </LogoutButton>
            </>
          ) : (
            <>
              {/* Login State */}
              <ProfileHeader
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ProfileAvatar>🔒</ProfileAvatar>
                <ProfileName>مرحباً بك</ProfileName>
                <ProfilePhone>سجل دخولك للاستمتاع بخدماتنا</ProfilePhone>
                <ProfileStatus>عضو جديد؟ سجل الآن</ProfileStatus>
              </ProfileHeader>

              <LoginButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRegister}
              >
                إنشاء حساب جديد
              </LoginButton>

              <LoginButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogin}
                style={{ background: 'linear-gradient(135deg, #6c757d, #495057)', marginTop: '10px' }}
              >
                تسجيل الدخول
              </LoginButton>
            </>
          )}
        </ProfileContainer>
      </MainContent>
    </MobileFrame>
      )}
    </>
  );
};

export default UserProfileScreen;
