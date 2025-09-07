import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../theme';

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

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

const WelcomeSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 20px;
`;

const WelcomeTitle = styled.h1`
  color: #74308c;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const WelcomeSubtitle = styled.p`
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const TabContainer = styled.div`
  display: flex;
  background: rgba(116, 48, 140, 0.1);
  border-radius: 15px;
  padding: 4px;
  margin-bottom: 20px;
`;

const TabButton = styled(motion.button)`
  flex: 1;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#74308c' : '#6c757d'};
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 2px 8px rgba(116, 48, 140, 0.2)' : 'none'};
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #74308c;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  font-family: ${theme.typography.fontFamily.arabic};
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(116, 48, 140, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily.arabic};
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #74308c;
    box-shadow: 0 0 0 3px rgba(116, 48, 140, 0.1);
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const PasswordInput = styled(Input)`
  padding-right: 50px;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6c757d;
  font-size: 1.2rem;
  
  &:hover {
    color: #74308c;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #74308c, #5a2470);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  margin-top: 10px;
  box-shadow: 0 4px 16px rgba(116, 48, 140, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(116, 48, 140, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SwitchMode = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SwitchText = styled.span`
  color: #6c757d;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const SwitchLink = styled.button`
  background: none;
  border: none;
  color: #74308c;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  font-family: ${theme.typography.fontFamily.arabic};
  text-decoration: underline;
  
  &:hover {
    color: #5a2470;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(116, 48, 140, 0.2);
  }
`;

const DividerText = styled.span`
  color: #6c757d;
  font-size: 0.8rem;
  padding: 0 15px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const SocialButton = styled(motion.button)`
  width: 100%;
  background: ${props => props.bgColor || 'white'};
  color: ${props => props.textColor || '#2c3e50'};
  border: 2px solid ${props => props.borderColor || 'rgba(116, 48, 140, 0.2)'};
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 5px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const LoginRegisterScreen = ({ onNavigate, mode = 'login' }) => {
  const [activeTab, setActiveTab] = React.useState('phone'); // 'phone' or 'email'
  const [isLogin, setIsLogin] = React.useState(mode === 'login');
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (activeTab === 'phone') {
      if (!formData.phone) {
        newErrors.phone = 'رقم الهاتف مطلوب';
      } else if (!/^(\+966|0)?[5-9][0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'رقم الهاتف غير صحيح';
      }
    } else {
      if (!formData.email) {
        newErrors.email = 'البريد الإلكتروني مطلوب';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'البريد الإلكتروني غير صحيح';
      }
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    
    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = 'الاسم الكامل مطلوب';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', { ...formData, activeTab, isLogin });
      setIsLoading(false);
      
      // Navigate to home or profile
      onNavigate && onNavigate('home');
    }, 2000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrors({});
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
  };

  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('home')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        <ContentContainer>
          <WelcomeSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <WelcomeTitle>
              {isLogin ? 'مرحباً بعودتك!' : 'انضم إلينا'}
            </WelcomeTitle>
            <WelcomeSubtitle>
              {isLogin ? 'سجل دخولك للاستمتاع بخدماتنا' : 'أنشئ حسابك الجديد'}
            </WelcomeSubtitle>
          </WelcomeSection>

          <TabContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabButton
              active={activeTab === 'phone'}
              onClick={() => handleTabChange('phone')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📱 رقم الهاتف
            </TabButton>
            <TabButton
              active={activeTab === 'email'}
              onClick={() => handleTabChange('email')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📧 البريد الإلكتروني
            </TabButton>
          </TabContainer>

          <FormContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FormTitle>
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
            </FormTitle>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {activeTab === 'phone' ? (
                  <motion.div
                    key="phone"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InputGroup>
                      <Label>رقم الهاتف</Label>
                      <Input
                        type="tel"
                        placeholder="+966 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                      {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                    </InputGroup>
                  </motion.div>
                ) : (
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InputGroup>
                      <Label>البريد الإلكتروني</Label>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </InputGroup>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isLogin && (
                <InputGroup>
                  <Label>الاسم الكامل</Label>
                  <Input
                    type="text"
                    placeholder="أحمد محمد"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                  {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
                </InputGroup>
              )}

              <InputGroup>
                <Label>كلمة المرور</Label>
                <PasswordContainer>
                  <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="أدخل كلمة المرور"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                  />
                  <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '🙈' : '👁️'}
                  </PasswordToggle>
                </PasswordContainer>
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </InputGroup>

              {!isLogin && (
                <InputGroup>
                  <Label>تأكيد كلمة المرور</Label>
                  <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="أعد إدخال كلمة المرور"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  />
                  {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                </InputGroup>
              )}

              <SubmitButton
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? 'جاري المعالجة...' : (isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب')}
              </SubmitButton>
            </form>

            <SwitchMode>
              <SwitchText>
                {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
              </SwitchText>
              <SwitchLink onClick={handleModeSwitch}>
                {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
              </SwitchLink>
            </SwitchMode>

            <Divider>
              <DividerText>أو</DividerText>
            </Divider>

            <SocialButton
              bgColor="#1877f2"
              textColor="white"
              borderColor="#1877f2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📘 متابعة مع فيسبوك
            </SocialButton>

            <SocialButton
              bgColor="white"
              textColor="#333"
              borderColor="#ddd"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🔍 متابعة مع جوجل
            </SocialButton>
          </FormContainer>
        </ContentContainer>
      </MainContent>
    </MobileFrame>
  );
};

export default LoginRegisterScreen;
