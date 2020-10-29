import { takeEvery, put, call } from 'redux-saga/effects';

import { PRODUCT_ACTION_TYPES } from '../actionTypes';
import { getProducts } from '../../api/products';
import { setError, setProducts } from '../actions';
import { RequestProductsProps } from '../../api/products';
import { initialFiltersState } from '../../filters/reducer';
import { setTotalItems } from '../../pagination/actions';

type RequestParams = { payload: RequestProductsProps; type: string };

function* productsSagaWorker({ payload = initialFiltersState }: RequestParams) {
  try {
    const responseResult = yield call(getProducts, payload);
    const { products, totalItems } = responseResult;
    
    yield put(setProducts(products));
    yield put(setTotalItems(totalItems));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* productsSagaWatcher() {
  yield takeEvery(PRODUCT_ACTION_TYPES.GET_PRODUCTS_REQUEST, productsSagaWorker);
}
