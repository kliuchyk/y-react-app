import { takeEvery, call, put } from 'redux-saga/effects';
import { createNewProduct } from '../../api/products';
import { PRODUCT_ACTION_TYPES } from '../actionTypes';
import { createProductError, requestProducts } from '../actions';
import { NewProduct } from '../reducer';

type RequestParams = { product: NewProduct; type: string };

function* createProductWorker({ product }: RequestParams) {
  try {
    yield call(createNewProduct, product);
    yield put(requestProducts());
  } catch (error) {
    yield put(createProductError(error.toString()));
  }
}

export default function* createProductWatcher() {
  yield takeEvery(PRODUCT_ACTION_TYPES.CREATE_PRODUCT_REQUEST, createProductWorker);
}
