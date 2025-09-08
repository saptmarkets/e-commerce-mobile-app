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

const LogoImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  object-fit: contain;
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

        <LogoImage
          src="/logo sapt white.png"
          alt="SAPT Logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
        />
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


