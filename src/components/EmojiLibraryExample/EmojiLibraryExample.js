import React from 'react';
import styled from 'styled-components';
import { getProductEmoji, productEmojis, featureEmojis } from '../../utils/emojiLibrary';

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
`;

const ProductIcon = styled.div`
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h3`
  margin: 0 0 4px 0;
  font-size: 1rem;
  font-weight: 600;
`;

const ProductCategory = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6c757d;
`;

const ProductPrice = styled.div`
  font-weight: 600;
  color: #28a745;
`;

// Example usage of the emoji library
const EmojiLibraryExample = () => {
  const sampleProducts = [
    { name: 'Fresh Tomatoes', category: 'vegetables', price: '$2.99' },
    { name: 'Organic Milk', category: 'dairy', price: '$3.49' },
    { name: 'Grass-fed Beef', category: 'meat', price: '$12.99' },
    { name: 'Whole Grain Bread', category: 'bread', price: '$4.29' },
    { name: 'Fresh Bananas', category: 'fruits', price: '$1.99' },
    { name: 'Organic Eggs', category: 'dairy', price: '$5.99' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Product Examples with Emojis</h2>
      
      {sampleProducts.map((product, index) => (
        <ProductCard key={index}>
          <ProductIcon>
            {getProductEmoji(product.category)}
          </ProductIcon>
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductCategory>{product.category}</ProductCategory>
          </ProductInfo>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductCard>
      ))}

      <div style={{ marginTop: '32px' }}>
        <h3>Available Emoji Categories:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
          <div>
            <h4>Fresh Produce</h4>
            <div>{productEmojis.freshProduce.vegetables.slice(0, 4).join(' ')}</div>
            <div>{productEmojis.freshProduce.fruits.slice(0, 4).join(' ')}</div>
          </div>
          <div>
            <h4>Dairy & Eggs</h4>
            <div>{productEmojis.dairy.milk.slice(0, 3).join(' ')}</div>
            <div>{productEmojis.dairy.cheese.slice(0, 3).join(' ')}</div>
          </div>
          <div>
            <h4>Meat & Fish</h4>
            <div>{productEmojis.meatFish.beef.slice(0, 3).join(' ')}</div>
            <div>{productEmojis.meatFish.fish.slice(0, 3).join(' ')}</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '32px' }}>
        <h3>Feature Emojis:</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <span>Fresh: {featureEmojis.fresh}</span>
          <span>Premium: {featureEmojis.premium}</span>
          <span>Delivery: {featureEmojis.delivery}</span>
          <span>Organic: {featureEmojis.organic}</span>
          <span>Secure: {featureEmojis.secure}</span>
          <span>Cart: {featureEmojis.cart}</span>
          <span>Search: {featureEmojis.search}</span>
          <span>Payment: {featureEmojis.payment}</span>
        </div>
      </div>
    </div>
  );
};

export default EmojiLibraryExample;
