import { all } from 'redux-saga/effects';

import productsList from '../../products/sagas/productsListSaga';
import productDetails from '../../products/sagas/productDetailsSaga';
import newProductSaga from '../../products/sagas/createProductSaga';
import filterSaga from '../../filters/filterSaga';
import paginationSaga from '../../pagination/paginationSaga';
import editProductSaga from '../../products/sagas/editProductSaga'

export default function* rootSaga() {
  yield all([
    productsList(),
    productDetails(),
    filterSaga(),
    paginationSaga(),
    newProductSaga(),
    editProductSaga(),
  ]);
}
