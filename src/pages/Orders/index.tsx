import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import OrdersList from '../../orders/containers/OrdersList';
import { getOrdersList } from '../../orders/actions';
import { selectLoading } from '../../orders/selectors';
import './styles.css';

function OrdersPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getOrdersList());
  }, [dispatch]);

  return (
    <div className="orders-container">
      <h1 className="page-title">ORDERS</h1>
      {loading ? <Spin size="large" /> : <OrdersList />}
    </div>
  );
}

export default OrdersPage;
