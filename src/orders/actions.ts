import { History } from 'history';

import { OrderItems } from './reducer';
import { ORDERS_ACTION_TYPES } from './actionTypes';

export const getOrdersList = () => ({
  type: ORDERS_ACTION_TYPES.GET_ORDERS_REQUEST,
});

export const setOrders = (orders: any) => ({
  type: ORDERS_ACTION_TYPES.GET_ORDERS_SUCCESS,
  orders,
})

export const makeOrderRequest = (orderItems: OrderItems, history: History) => ({
  type: ORDERS_ACTION_TYPES.CREATE_ORDER_REQUEST,
  orderItems,
  history,
});

export const createOrderSuccess = () => {
  return {
    type: ORDERS_ACTION_TYPES.CREATE_ORDER_SUCCESS,
  }
}
