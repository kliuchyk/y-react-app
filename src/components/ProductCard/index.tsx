import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './styles.css'

export interface Product {
  isEditable: boolean;
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductCardProps = Product;

const { Meta } = Card;

export default function ProductCard(props: Product) {
  const { id, isEditable, name, price, origin, createdAt, updatedAt } = props;

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
    <Link to={`products/${id}`}>
      <Card
        hoverable
        style={{ width: 300, margin: '20px' }}
        // extra={<a href="#">Add to basket</a>}
        actions={[
          <span className='add-to-cart' onClick={handleClick}>
            Add to cart <ShoppingCartOutlined key="setting" />
          </span>,
        ]}
      >
        <Meta title={name} description={`Origin: ${origin}`} />
        <p>Pice: {price}</p>
      </Card>
    </Link>
  );
}
