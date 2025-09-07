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
      
      {/* Test 1: CSS Class Approach */}
      <CurrencyDemo>
        <span className="icon-saudi_riyal"></span> 150.00
      </CurrencyDemo>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 1: CSS class .icon-saudi_riyal
      </DemoText>

      {/* Test 2: Alternative CSS Class */}
      <div className="currency-test">
        <span className="saudi-currency"></span> 250.00
      </div>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 2: CSS class .saudi-currency
      </DemoText>

      {/* Test 3: Direct unicode (should work now) */}
      <CurrencyDemo>
        {'\uE900'} 150.00
      </CurrencyDemo>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 3: Direct unicode \uE900
      </DemoText>

      {/* Test 4: Regular Arabic text */}
      <div style={{ fontFamily: theme.typography.fontFamily.saudi, fontSize: '18px', textAlign: 'center', margin: '16px 0' }}>
        نص تجريبي بالخط السعودي
      </div>
      <DemoText style={{ textAlign: 'center', fontSize: '14px', color: theme.colors.gray500 }}>
        Test 4: Arabic text with Saudi font
      </DemoText>
    </SaudiFontDemo>
  );
};

export default SaudiFontDemoComponent;
