// Design System Theme
export const theme = {
  colors: {
    // Brand Colors
    brandGreen: '#4CAF50',
    brandGreenDark: '#388E3C',
    brandGreenLight: '#81C784',
    brandPurple: '#800080',
    brandPurpleLight: '#A9A9A9',
    
    // Neutral Colors
    white: '#FFFFFF',
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
    
    // Status Colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
  },
  
  typography: {
    fontFamily: {
      arabic: "'Noor', 'Noto Sans Arabic', 'Arial', sans-serif",
      english: "'Inter', 'Arial', sans-serif",
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '32px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    brand: '0 4px 12px rgba(76, 175, 80, 0.15)',
  },
  
  breakpoints: {
    mobile: '393px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default theme;
