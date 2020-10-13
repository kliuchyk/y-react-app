import { takeEvery, call, put } from 'redux-saga/effects';
import { History } from 'history';

import { createNewOrder } from '../../api/orders';
import { OrderItems } from '../reducer';
import { emptyCart } from '../../cart/actions';
import { createOrderSuccess } from '../actions';
import { ORDERS_ACTION_TYPES } from '../actionTypes';

type NewOrderSagaParams = { orderItems: OrderItems; history: History; type: string };

function* newOrdersSagaWorker({ orderItems, history }: NewOrderSagaParams) {
  try {
    yield call(createNewOrder, orderItems);
    yield put(createOrderSuccess());
    yield put(emptyCart());
    history.push('/orders');
  } catch (error) {
    console.log(error);
  }
}


export default function* newOrderSagaWatcher() {
  yield takeEvery(ORDERS_ACTION_TYPES.CREATE_ORDER_REQUEST, newOrdersSagaWorker);
}