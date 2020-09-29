import { takeEvery, put, call } from 'redux-saga/effects';

import { PRODUCT_ACTION_TYPES } from '../actionTypes';
import { getProducts } from '../../api/products';
import { setError, setProducts } from '../actions';
import { RequestProductsProps } from '../../api/products';
import { initialFiltersState } from '../../filters/reducer';

type RequestParams = { payload: RequestProductsProps; type: string };

function* productsSagaWorker({ payload = initialFiltersState }: RequestParams) {
  try {
    const products = yield call(getProducts, payload);
    yield put(setProducts(products));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* productsSagaWatcher() {
  yield takeEvery(PRODUCT_ACTION_TYPES.GET_PRODUCTS_REQUEST, productsSagaWorker);
}
