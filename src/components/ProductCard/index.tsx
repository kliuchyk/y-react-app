import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { incrementProduct } from '../../cart/actions';
import { Product } from '../../products/reducer';
import './styles.css';

export interface ProductCardProps extends Product {
  hoverable?: boolean;
}

const { Meta } = Card;

export default function ProductCard(props: ProductCardProps) {
  const {
    id,
    isEditable,
    name,
    price,
    origin,
    createdAt,
    updatedAt,
    hoverable = false,
  } = props;
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    dispatch(incrementProduct(id));
  };

  return (
    <Card
      hoverable={hoverable}
      style={{ width: 300, margin: '20px' }}
      actions={[
        <span className="add-to-cart" onClick={handleClick}>
          Add to cart <ShoppingCartOutlined key="setting" />
        </span>,
      ]}
    >
      <Meta title={name} description={`Origin: ${origin}`} />
      <p>Pice: {price}</p>
    </Card>
  );
}
