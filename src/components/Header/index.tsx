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
  const matchOrders = useRouteMatch(RoutePaths.Orders._());
  const matchMyProducts = useRouteMatch(RoutePaths.MyProducts._());
  const matchShoppingCart = useRouteMatch(RoutePaths.Cart._());
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  return (
    <PageHeader
      className="page-header"
      title="Products App"
      subTitle="ReactJS School"
      extra={[
        <Link key="products" to={RoutePaths.Products._()}>
          <Button type={matchProducts ? 'primary' : 'default'}>All Products</Button>
        </Link>,
        <Link key="my-products" to={RoutePaths.MyProducts._()}>
          <Button type={matchMyProducts ? 'primary' : 'default'}>My Products</Button>
        </Link>,
        <Button
          key="modal"
          type="default"
          onClick={() => dispatch(toggleAddNewProductModal(true))}
        >
          Add new product
        </Button>,
        <Link key="orders" to={RoutePaths.Orders._()}>
          <Button type={matchOrders ? 'primary' : 'default'}>Orders</Button>
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
