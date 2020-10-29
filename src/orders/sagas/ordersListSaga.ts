import { takeEvery, call, put } from 'redux-saga/effects';

import { getOrdersList } from '../../api/orders';
import { setOrders } from '../actions';
import { ORDERS_ACTION_TYPES } from '../actionTypes';

function* ordersSagaWorker() {
  try {
    const response = yield call(getOrdersList);
    yield put(setOrders(response.items));
  } catch (error) {
    console.log(error);
  }
}


export default function* ordersListSagaWatcher() {
  yield takeEvery(ORDERS_ACTION_TYPES.GET_ORDERS_REQUEST, ordersSagaWorker);
}