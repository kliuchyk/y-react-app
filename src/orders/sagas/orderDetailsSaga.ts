import { setOrderDetails } from './../actions';
import { takeEvery, call, put } from 'redux-saga/effects';

import { getOrderDetails } from '../../api/orders';
import { ORDERS_ACTION_TYPES } from '../actionTypes';

type RequestProps = { orderId: string; type: string; }

function* orderDetailsWorker({ orderId }: RequestProps) {
  try {
    const response = yield call(getOrderDetails, orderId);
    yield put(setOrderDetails(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* orderDetailsWatcher() {
  yield takeEvery(ORDERS_ACTION_TYPES.GET_ORDER_DETAILS_REQUEST, orderDetailsWorker);
}