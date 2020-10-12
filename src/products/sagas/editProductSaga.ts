import { editProductSuccess } from '../../modals/actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { PRODUCT_ACTION_TYPES } from '../actionTypes';
import { Product } from '../reducer';
import { editProduct } from '../../api/products';
import { setCurrentPage } from '../../pagination/actions';

type EditProductAction = { type: string; product: Product }

function* editProductWorker({ product }: EditProductAction) {
  try {
    yield call(editProduct, product);
    yield put(editProductSuccess());
    yield put(setCurrentPage(1, true));
  } catch (error) {
    console.log(error)
  }
}

export default function* editProductWatcher() {
  yield takeEvery(PRODUCT_ACTION_TYPES.EDIT_PRODUCTS_REQUEST, editProductWorker);
}