import React from 'react';
import { PageHeader, Button } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import RoutePaths from '../../app/routes/paths';
import './styles.css';

export default function Header() {
  const matchProducts = useRouteMatch(RoutePaths.Products._());
  const matchShoppingCart = useRouteMatch(RoutePaths.Cart._());

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
          <Badge count={1}>
            <ShoppingCartOutlined />
          </Badge>
        </Link>,
      ]}
    />
  );
}
