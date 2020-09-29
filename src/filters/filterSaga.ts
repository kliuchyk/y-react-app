import { put, takeEvery, call } from 'redux-saga/effects';
import { getProducts } from '../api/products';

import { FiltersState } from './reducer';
import { FILTER_ACTION_TYPES } from './actionTypes';
import { setProducts } from '../products/actions';
import { setError } from '../products/actions';

type FilterSagaParams = { filters: FiltersState; type: string };

function* filterSagaWorker({ filters }: FilterSagaParams) {
  console.log('FILTERS CHANGES with SAGA!', filters);

  try {
    // 1. call all_products API again for the first page, but with new filters
    const response = yield call(getProducts, filters);

    // 2. set new products to the state
    yield put(setProducts(response.products));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* filterSagaWatcher() {
  yield takeEvery(FILTER_ACTION_TYPES.CHANGE_FILTERS, filterSagaWorker);
}
