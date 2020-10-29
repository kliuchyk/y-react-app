import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { selectLoading, selectOrderDetails } from '../../../orders/selectors';
import { getOrderDetails } from '../../../orders/actions';
import OrderDetailsComponent from '../../components/OrderDetailsComponent';

export default function OrderDetails() {
  const loading = useSelector(selectLoading);
  const orderDetails = useSelector(selectOrderDetails);
  const dispatch = useDispatch();
  const { orderId } = useParams<{ orderId: string }>();

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return !loading && orderDetails ? (
    <OrderDetailsComponent
      id={orderDetails.id}
      pieces={orderDetails.pieces}
      createdAt={orderDetails.createdAt}
    />
  ) : (
    <Spin />
  );
}
