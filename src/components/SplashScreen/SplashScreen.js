import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Frame = styled(motion.div)`
  width: 393px;
  height: 852px;
  background: linear-gradient(135deg, #6a1b9a 0%, #7b1fa2 35%, #8e24aa 100%);
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
`;

const Center = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoBackdrop = styled(motion.div)`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
  filter: blur(0.5px);
`;

const CartIcon = styled(motion.svg)`
  width: 140px;
  height: 140px;
  color: #fff;
`;

const AppName = styled(motion.div)`
  position: absolute;
  bottom: 56px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const SplashScreen = ({ onDone }) => {
  React.useEffect(() => {
    const id = setTimeout(() => {
      onDone?.();
    }, 2200);
    return () => clearTimeout(id);
  }, [onDone]);

  return (
    <Frame
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Center>
        <LogoBackdrop
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <CartIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ x: -260, rotate: -8, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.03.01L19 14c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 00-.88-1.48H6.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25 0-.04.01-.09.03-.12l.96-1.37z" fill="currentColor"/>
        </CartIcon>
      </Center>
      <AppName
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        أسواق سبت المركزية
      </AppName>
    </Frame>
  );
};

export default SplashScreen;


