import React from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import SplashScreen from './components/SplashScreen/SplashScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = React.useState('splash');

  const handleGetStarted = () => {
    console.log('Get Started clicked! Navigating to home screen...');
    setCurrentScreen('home');
  };

  const handleNavigation = (screenId) => {
    if (screenId === 'home') {
      setCurrentScreen('home');
    } else if (screenId === 'welcome') {
      setCurrentScreen('welcome');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px'
    }}>
      {currentScreen === 'splash' && (
        <SplashScreen onDone={() => setCurrentScreen('welcome')} />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen onGetStarted={handleGetStarted} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigation} />
      )}
    </div>
  );
};

export default App;
