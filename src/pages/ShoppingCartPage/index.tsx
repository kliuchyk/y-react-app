import React from 'react';

import CartProducts from '../../cart/containers/CartProducts';
import './styles.css';

const ShoppingCartPage: React.FC = () => {
  return (
    <div className="cart-container">
      <h1>SHOPPING CART</h1>
      <CartProducts />
    </div>
  );
};

export default ShoppingCartPage;
