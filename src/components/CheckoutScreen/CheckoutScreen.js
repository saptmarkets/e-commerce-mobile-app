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
  overflow-y: auto;
  overflow-x: hidden;
  
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

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
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

const Section = styled(motion.div)`
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

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  font-family: ${theme.typography.fontFamily.arabic};
  direction: rtl;
  text-align: right;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(116, 48, 140, 0.3);
  border-radius: 12px;
  color: #2c3e50;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  direction: rtl;
  text-align: right;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(116, 48, 140, 0.6);
    font-family: ${theme.typography.fontFamily.arabic};
  }
  
  &:focus {
    outline: none;
    border-color: #74308c;
    box-shadow: 0 0 0 3px rgba(116, 48, 140, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(116, 48, 140, 0.3);
  border-radius: 12px;
  color: #2c3e50;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  direction: rtl;
  text-align: right;
  resize: vertical;
  min-height: 80px;
  box-sizing: border-box;
  font-family: ${theme.typography.fontFamily.arabic};
  
  &::placeholder {
    color: rgba(116, 48, 140, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #74308c;
    box-shadow: 0 0 0 3px rgba(116, 48, 140, 0.1);
  }
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 2px solid ${props => props.selected ? '#74308c' : 'rgba(116, 48, 140, 0.2)'};
  border-radius: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? 'rgba(116, 48, 140, 0.1)' : 'transparent'};
  
  &:hover {
    border-color: #74308c;
    background: rgba(116, 48, 140, 0.05);
  }
`;

const PaymentIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.bgColor || '#74bd43'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  font-size: 1.2rem;
`;

const PaymentInfo = styled.div`
  flex: 1;
`;

const PaymentName = styled.div`
  color: #2c3e50;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 2px;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const PaymentDesc = styled.div`
  color: #6c757d;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const OrderSummary = styled.div`
  background: rgba(116, 48, 140, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
    border-top: 1px solid rgba(116, 48, 140, 0.2);
    font-weight: 700;
    font-size: 1rem;
  }
`;

const SummaryLabel = styled.div`
  color: #2c3e50;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const SummaryValue = styled.div`
  color: ${props => props.isTotal ? '#74bd43' : '#2c3e50'};
  font-weight: ${props => props.isTotal ? '700' : '500'};
  font-size: ${props => props.isTotal ? '1rem' : '0.9rem'};
  font-family: ${theme.typography.fontFamily.arabic};
`;

const DiscountRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 6px 12px;
  background: rgba(116, 189, 67, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(116, 189, 67, 0.2);
`;

const TotalSeparator = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(116, 48, 140, 0.3), transparent);
  margin: 12px 0;
`;

const DiscountLabel = styled.div`
  color: #74bd43;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const DiscountValue = styled.div`
  color: #74bd43;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const PlaceOrderButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${theme.typography.fontFamily.arabic};
  box-shadow: 0 4px 16px rgba(116, 189, 67, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(116, 189, 67, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const MapButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #74308c, #5a2470);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(116, 48, 140, 0.3);
  }
`;

const CouponSection = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`;

const CouponInput = styled(Input)`
  flex: 1;
  margin-bottom: 0;
`;

const CouponButton = styled(motion.button)`
  background: linear-gradient(135deg, #74bd43, #5a9a35);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(116, 189, 67, 0.3);
  }
`;

const LoyaltySection = styled.div`
  background: rgba(116, 48, 140, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
`;

const LoyaltyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LoyaltyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LoyaltyLabel = styled.div`
  color: #74308c;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const LoyaltyPoints = styled.div`
  color: #74bd43;
  font-weight: 700;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const CheckLoyaltyButton = styled(motion.button)`
  background: ${props => props.checked ? '#74bd43' : 'linear-gradient(135deg, #74308c, #5a2470)'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const UseLoyaltyCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #74308c;
`;

const CheckboxLabel = styled.label`
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: ${theme.typography.fontFamily.arabic};
  cursor: pointer;
`;

const MapContainer = styled(motion.div)`
  background: rgba(116, 48, 140, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  text-align: center;
  border: 2px dashed rgba(116, 48, 140, 0.3);
`;

const MapIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const MapText = styled.div`
  color: #74308c;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ProductsSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(116, 48, 140, 0.2);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ProductItem = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid rgba(116, 48, 140, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductEmoji = styled.div`
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(116, 48, 140, 0.1);
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductName = styled.div`
  color: #74308c;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const ProductPrice = styled.div`
  color: #2c3e50;
  font-size: 0.8rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const QtyButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(116, 48, 140, 0.25);
  background: white;
  color: #74308c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  
  &:hover {
    background: rgba(116, 48, 140, 0.1);
  }
`;

const Quantity = styled.div`
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
`;

const LineTotal = styled.div`
  color: #74bd43;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: ${theme.typography.fontFamily.arabic};
`;

const RemoveButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(220, 53, 69, 0.3);
  background: white;
  color: #dc3545;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  
  &:hover {
    background: rgba(220, 53, 69, 0.1);
  }
`;

const CheckoutScreen = ({ onNavigate, cartItems = [], onPlaceOrder, onUpdateCart }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '0501234567', // Pre-filled customer phone
    email: '',
    address: '',
    city: '',
    notes: ''
  });
  
  const [selectedPayment, setSelectedPayment] = React.useState('cash');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [couponCode, setCouponCode] = React.useState('');
  const [couponDiscount, setCouponDiscount] = React.useState(0);
  const [loyaltyPoints, setLoyaltyPoints] = React.useState(0);
  const [availablePoints, setAvailablePoints] = React.useState(1240);
  const [useLoyaltyPoints, setUseLoyaltyPoints] = React.useState(false);
  const [pointsChecked, setPointsChecked] = React.useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.qty * (Number(item.unitPrice) || 0)), 0);
  const deliveryFee = subtotal > 50 ? 0 : 10; // Free delivery over 50 SAR
  const loyaltyDiscount = useLoyaltyPoints ? Math.min(loyaltyPoints * 0.01, subtotal * 0.5) : 0; // 1 point = 0.01 SAR, max 50% discount
  const total = subtotal + deliveryFee - couponDiscount - loyaltyDiscount;

  const paymentMethods = [
    {
      id: 'cash',
      name: 'الدفع عند الاستلام',
      description: 'ادفع نقداً عند استلام الطلب',
      icon: '💵',
      bgColor: '#28a745'
    },
    {
      id: 'card',
      name: 'بطاقة ائتمان',
      description: 'ادفع بالبطاقة الائتمانية',
      icon: '💳',
      bgColor: '#007bff'
    },
    {
      id: 'stc',
      name: 'STC Pay',
      description: 'ادفع عبر STC Pay',
      icon: '📱',
      bgColor: '#6f42c1'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyCoupon = () => {
    const validCoupons = {
      'WELCOME10': 10,
      'SAVE20': 20,
      'FIRST15': 15,
      'DISCOUNT25': 25
    };
    
    if (validCoupons[couponCode.toUpperCase()]) {
      setCouponDiscount(validCoupons[couponCode.toUpperCase()]);
      alert(`تم تطبيق الكوبون! خصم ${validCoupons[couponCode.toUpperCase()]} ريال`);
    } else {
      alert('كود الكوبون غير صحيح');
    }
  };

  const handleCheckLoyaltyPoints = () => {
    setPointsChecked(true);
    setLoyaltyPoints(availablePoints);
    alert(`لديك ${availablePoints} نقطة ولاء متاحة للاستخدام`);
  };

  const handleIncrementQuantity = (itemId) => {
    if (onUpdateCart) {
      onUpdateCart('increment', itemId);
    }
  };

  const handleDecrementQuantity = (itemId) => {
    if (onUpdateCart) {
      onUpdateCart('decrement', itemId);
    }
  };

  const handleRemoveItem = (itemId) => {
    if (onUpdateCart) {
      onUpdateCart('remove', itemId);
    }
  };

  const handlePlaceOrder = async () => {
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      const orderData = {
        ...formData,
        items: cartItems,
        paymentMethod: selectedPayment,
        subtotal,
        deliveryFee,
        couponDiscount,
        loyaltyDiscount,
        loyaltyPointsUsed: useLoyaltyPoints ? loyaltyPoints : 0,
        total,
        orderDate: new Date().toISOString()
      };
      
      console.log('Order placed:', orderData);
      onPlaceOrder && onPlaceOrder(orderData);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <MobileFrame initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <MainContent>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate && onNavigate('cart')}>
            <svg viewBox="0 0 24 24"><path d="M4 11h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z"/></svg>
          </BackButton>
          <HeaderTitle>إتمام الطلب</HeaderTitle>
          <div style={{ width: 40 }} />
        </Header>

        {/* Customer Information */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <SectionTitle>معلومات العميل</SectionTitle>
          
          <InputGroup>
            <Label>الاسم الكامل *</Label>
            <Input
              type="text"
              placeholder="أدخل اسمك الكامل"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>رقم الهاتف *</Label>
            <Input
              type="tel"
              placeholder="05xxxxxxxx"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>البريد الإلكتروني</Label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>العنوان *</Label>
            <TextArea
              placeholder="أدخل عنوانك بالتفصيل"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </InputGroup>

          <MapButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowMap(!showMap)}
          >
            <span>🗺️</span>
            {showMap ? 'إخفاء الخريطة' : 'اختيار الموقع على الخريطة'}
          </MapButton>

          {showMap && (
            <MapContainer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <MapIcon>🗺️</MapIcon>
              <MapText>اختر موقعك على الخريطة</MapText>
            </MapContainer>
          )}

          <InputGroup>
            <Label>المدينة</Label>
            <Input
              type="text"
              placeholder="الرياض"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>ملاحظات إضافية</Label>
            <TextArea
              placeholder="أي ملاحظات أو تعليمات خاصة"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
            />
          </InputGroup>
        </Section>

        {/* Products in Cart */}
        <ProductsSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
          <SectionTitle>منتجات الطلب</SectionTitle>
          
          {cartItems.map((item, index) => (
            <ProductItem
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
            >
              <ProductEmoji>{item.emoji || '📦'}</ProductEmoji>
              
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>{(item.unitPrice || 0).toFixed(2)} ريال</ProductPrice>
              </ProductInfo>
              
              <QuantityControls>
                <QtyButton
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDecrementQuantity(item.id)}
                >
                  -
                </QtyButton>
                <Quantity>{item.qty}</Quantity>
                <QtyButton
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleIncrementQuantity(item.id)}
                >
                  +
                </QtyButton>
              </QuantityControls>
              
              <LineTotal>
                {(item.qty * (item.unitPrice || 0)).toFixed(2)} ريال
              </LineTotal>
              
              <RemoveButton
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRemoveItem(item.id)}
              >
                ×
              </RemoveButton>
            </ProductItem>
          ))}
        </ProductsSection>

        {/* Coupon Code */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
          <SectionTitle>كود الخصم</SectionTitle>
          
          <CouponSection>
            <CouponInput
              type="text"
              placeholder="أدخل كود الخصم"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <CouponButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleApplyCoupon}
            >
              تطبيق
            </CouponButton>
          </CouponSection>
          
          {couponDiscount > 0 && (
            <div style={{ color: '#74bd43', fontSize: '0.9rem', fontWeight: '600', textAlign: 'right', marginTop: '8px' }}>
              تم تطبيق خصم {couponDiscount} ريال
            </div>
          )}
        </Section>

        {/* Loyalty Points */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }}>
          <SectionTitle>نقاط الولاء</SectionTitle>
          
          <LoyaltySection>
            <LoyaltyRow>
              <LoyaltyInfo>
                <LoyaltyLabel>رقم العميل</LoyaltyLabel>
                <LoyaltyPoints>{formData.phone}</LoyaltyPoints>
              </LoyaltyInfo>
              <CheckLoyaltyButton
                checked={pointsChecked}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCheckLoyaltyPoints}
              >
                {pointsChecked ? 'تم التحقق' : 'فحص النقاط'}
              </CheckLoyaltyButton>
            </LoyaltyRow>
            
            {pointsChecked && (
              <>
                <LoyaltyRow>
                  <LoyaltyInfo>
                    <LoyaltyLabel>النقاط المتاحة</LoyaltyLabel>
                    <LoyaltyPoints>{availablePoints} نقطة</LoyaltyPoints>
                  </LoyaltyInfo>
                </LoyaltyRow>
                
                <UseLoyaltyCheckbox>
                  <Checkbox
                    type="checkbox"
                    id="useLoyalty"
                    checked={useLoyaltyPoints}
                    onChange={(e) => setUseLoyaltyPoints(e.target.checked)}
                  />
                  <CheckboxLabel htmlFor="useLoyalty">
                    استخدام النقاط ({loyaltyPoints} نقطة = {loyaltyDiscount.toFixed(2)} ريال خصم)
                  </CheckboxLabel>
                </UseLoyaltyCheckbox>
              </>
            )}
          </LoyaltySection>
        </Section>

        {/* Payment Methods */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <SectionTitle>طريقة الدفع</SectionTitle>
          
          {paymentMethods.map((method) => (
            <PaymentMethod
              key={method.id}
              selected={selectedPayment === method.id}
              onClick={() => setSelectedPayment(method.id)}
            >
              <PaymentIcon bgColor={method.bgColor}>
                {method.icon}
              </PaymentIcon>
              <PaymentInfo>
                <PaymentName>{method.name}</PaymentName>
                <PaymentDesc>{method.description}</PaymentDesc>
              </PaymentInfo>
            </PaymentMethod>
          ))}
        </Section>

        {/* Order Summary */}
        <Section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <SectionTitle>ملخص الطلب</SectionTitle>
          
          <OrderSummary>
            <SummaryRow>
              <SummaryLabel>المجموع الفرعي</SummaryLabel>
              <SummaryValue>{subtotal.toFixed(2)} ريال</SummaryValue>
            </SummaryRow>
            
            <SummaryRow>
              <SummaryLabel>رسوم التوصيل</SummaryLabel>
              <SummaryValue>{deliveryFee === 0 ? 'مجاناً' : `${deliveryFee.toFixed(2)} ريال`}</SummaryValue>
            </SummaryRow>
            
            {(couponDiscount > 0 || loyaltyDiscount > 0) && <TotalSeparator />}
            
            {couponDiscount > 0 && (
              <DiscountRow>
                <DiscountLabel>خصم الكوبون</DiscountLabel>
                <DiscountValue>-{couponDiscount.toFixed(2)} ريال</DiscountValue>
              </DiscountRow>
            )}
            
            {loyaltyDiscount > 0 && (
              <DiscountRow>
                <DiscountLabel>خصم نقاط الولاء</DiscountLabel>
                <DiscountValue>-{loyaltyDiscount.toFixed(2)} ريال</DiscountValue>
              </DiscountRow>
            )}
            
            {(couponDiscount > 0 || loyaltyDiscount > 0) && (
              <DiscountRow style={{ background: 'rgba(116, 189, 67, 0.15)', border: '2px solid rgba(116, 189, 67, 0.3)' }}>
                <DiscountLabel style={{ fontWeight: '700', fontSize: '1rem' }}>إجمالي الخصومات</DiscountLabel>
                <DiscountValue style={{ fontWeight: '700', fontSize: '1rem' }}>
                  -{(couponDiscount + loyaltyDiscount).toFixed(2)} ريال
                </DiscountValue>
              </DiscountRow>
            )}
            
            {(couponDiscount > 0 || loyaltyDiscount > 0) && <TotalSeparator />}
            
            <SummaryRow>
              <SummaryLabel>المجموع الكلي</SummaryLabel>
              <SummaryValue isTotal>{total.toFixed(2)} ريال</SummaryValue>
            </SummaryRow>
          </OrderSummary>

          <PlaceOrderButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePlaceOrder}
            disabled={isProcessing}
          >
            {isProcessing ? 'جاري المعالجة...' : 'تأكيد الطلب'}
          </PlaceOrderButton>
        </Section>
      </MainContent>
    </MobileFrame>
  );
};

export default CheckoutScreen;
