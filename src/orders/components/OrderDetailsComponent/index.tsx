import React from 'react';

import { OrderDetails } from '../../reducer';
import './styles.css';

export default function OrderDetailsComponent({ createdAt, pieces }: OrderDetails) {
  return (
    <div className="order-details">
      <h3>Order created at: {createdAt}</h3>
      <>
        {pieces.map(({ count, product }) => (
          <div className="product-container">
            <div className='product-name'>Product name: {product.name}</div>
            <div>Origin: {product.origin}</div>
            <div>Price: {product.price}</div>
            <div>Count: {count}</div>
          </div>
        ))}
      </>
    </div>
  );
}
