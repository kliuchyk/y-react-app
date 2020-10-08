import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { addProduct } from '../../cart/actions';
import { Product } from '../../products/reducer';
import './styles.css';

export interface ProductCardProps extends Product {
  hoverable?: boolean;
}

const { Meta } = Card;

export default function ProductCard(props: ProductCardProps) {
  const {
    id,
    name,
    price,
    origin,
    isEditable,
    // createdAt,
    // updatedAt,
    hoverable = false,
  } = props;
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    dispatch(addProduct({ productId: id, name, price, origin, count: 1 }));
  };

  const handleEdit = () => {
    console.log('EDIT');
  };

  const editProduct = (
    <Button type="primary" onClick={handleEdit}>
      Edit product
    </Button>
  );

  const addProductToCard = (
    <span className="add-to-cart" onClick={handleClick}>
      Add to cart <ShoppingCartOutlined key="setting" />
    </span>
  );

  const cardAction = isEditable ? editProduct : addProductToCard;

  return (
    <Card
      hoverable={hoverable}
      style={{ width: 300, margin: '20px' }}
      actions={[cardAction]}
    >
      <Meta title={name} description={`Origin: ${origin}`} />
      <p>Pice: {price}</p>
    </Card>
  );
}
