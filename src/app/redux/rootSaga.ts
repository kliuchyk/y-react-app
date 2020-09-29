import { all } from 'redux-saga/effects';

import productsList from '../../products/sagas/productsListSaga';
import productDetails from '../../products/sagas/productDetailsSaga';
import filterSaga from '../../filters/filterSaga';

export default function* rootSaga() {
  yield all([productsList(), productDetails(), filterSaga()])
}