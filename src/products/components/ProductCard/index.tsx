import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { addProduct } from '../../../cart/actions';
import { startProductEdit } from '../../actions';
import { Product } from '../../reducer';
import './styles.css';

const { Meta } = Card;

export default function ProductCard(props: Product) {
  const { id, name, price, origin, isEditable } = props;
  const dispatch = useDispatch();

  const addToCart = (e: MouseEvent): void => {
    e.preventDefault();
    dispatch(addProduct({ productId: id, name, price, origin, count: 1 }));
  };

  const handleEdit = () => {
    dispatch(startProductEdit({ id, name, price, origin }));
  };

  const editProduct = (
    <Button type="primary" onClick={handleEdit}>
      Edit product
    </Button>
  );

  const addProductToCard = (
    <span className="add-to-cart" onClick={addToCart}>
      Add to cart <ShoppingCartOutlined key="setting" />
    </span>
  );

  const cardAction = isEditable ? editProduct : addProductToCard;

  return (
    <Card style={{ width: 300, margin: '20px' }} actions={[cardAction]}>
      <Meta title={name} description={`Origin: ${origin}`} />
      <p>Pice: {price}</p>
    </Card>
  );
}
