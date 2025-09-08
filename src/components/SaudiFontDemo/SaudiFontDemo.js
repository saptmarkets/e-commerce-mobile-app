import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const SaudiFontDemo = styled.div`
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const DemoTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.saudi};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.brandPurple};
  margin-bottom: 16px;
  text-align: center;
`;

const DemoText = styled.p`
  font-family: ${theme.typography.fontFamily.saudi};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray700};
  line-height: 1.6;
  margin-bottom: 12px;
`;

const CurrencyDemo = styled.div`
  font-family: ${theme.typography.fontFamily.saudi};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.brandGreen};
  text-align: center;
  padding: 16px;
  background: ${theme.colors.gray50};
  border-radius: 8px;
  margin: 16px 0;
`;

const SaudiFontDemoComponent = () => {
  return (
    <SaudiFontDemo>
      <DemoTitle>خط السعودية الجديد</DemoTitle>
      <DemoText>
        هذا مثال على استخدام خط السعودية الجديد في التطبيق. الخط يدعم اللغة العربية بشكل مثالي.
      </DemoText>
      <DemoText>
        Saudi Riyal Font provides excellent Arabic typography support for our e-commerce application.
      </DemoText>
      
      {/* Test 1: Direct Unicode (Customer App Approach) */}
      <CurrencyDemo>
        {theme.typography.currency.saudiRiyal} 150.00
      </CurrencyDemo>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 1: Direct unicode from theme (Customer App Approach)
      </DemoText>

      {/* Test 2: Direct Unicode String */}
      <CurrencyDemo>
        {'\uE900'} 250.00
      </CurrencyDemo>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 2: Direct unicode string \uE900
      </DemoText>

      {/* Test 3: Icon class approach */}
      <CurrencyDemo>
        <span className="icon-saudi_riyal"></span> 150.00
      </CurrencyDemo>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 3: Icon class approach
      </DemoText>

      {/* Test 4: Font class approach */}
      <CurrencyDemo>
        <span className="font-saudi_riyal">{theme.typography.currency.saudiRiyal}</span> 150.00
      </CurrencyDemo>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 4: Font class with currency
      </DemoText>
    </SaudiFontDemo>
  );
};

export default SaudiFontDemoComponent;
