import { takeEvery, put, call } from 'redux-saga/effects';

import { PRODUCT_ACTION_TYPES } from '../actionTypes';
import { getProducts } from '../../api/products';
import { setError, setProducts } from '../actions';

function* productsSagaWorker() {
  try {
    const products = yield call(getProducts);
    yield put(setProducts(products));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* productsSagaWatcher() {
  yield takeEvery(PRODUCT_ACTION_TYPES.GET_PRODUCTS_REQUEST, productsSagaWorker);
}
