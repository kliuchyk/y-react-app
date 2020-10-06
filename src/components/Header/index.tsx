import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader, Button } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import RoutePaths from '../../app/routes/paths';
import { selectCartTotalPrice } from '../../cart/selectors';
import { toggleAddNewProductModal } from '../../modals/actions';
import './styles.css';

export default function Header() {
  const matchProducts = useRouteMatch(RoutePaths.Products._());
  const matchShoppingCart = useRouteMatch(RoutePaths.Cart._());
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  return (
    <PageHeader
      className="page-header"
      title="Products App"
      subTitle="ReactJS School"
      extra={[
        <Button
          key="modal"
          type="default"
          onClick={() => dispatch(toggleAddNewProductModal(true))}
        >
          Add new product
        </Button>,
        <Link key="products" to={RoutePaths.Products._()}>
          <Button type={matchProducts ? 'primary' : 'default'}>Products</Button>
        </Link>,
        <Link
          key="cart"
          to={RoutePaths.Cart._()}
          className={matchShoppingCart ? 'hidden' : ''}
        >
          <Badge count={totalPrice} overflowCount={99999}>
            <ShoppingCartOutlined />
          </Badge>
        </Link>,
      ]}
    />
  );
}
