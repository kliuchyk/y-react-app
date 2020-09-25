import React from 'react';
import { useSelector } from 'react-redux';
import { PageHeader, Button } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import RoutePaths from '../../app/routes/paths';
import { selectCartTotalPrice } from '../../app/redux/selectors';
import './styles.css';

export default function Header() {
  const matchProducts = useRouteMatch(RoutePaths.Products._());
  const matchShoppingCart = useRouteMatch(RoutePaths.Cart._());
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <PageHeader
      className="page-header"
      title="Products App"
      subTitle="ReactJS School"
      extra={[
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
