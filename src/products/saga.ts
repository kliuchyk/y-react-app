import { takeEvery, put, call } from 'redux-saga/effects';
import { PRODUCTS } from './actionTypes';

function* productsWorker() {
  console.log('from product saga worker!');
}

export default function* productsSaga() {
  yield takeEvery(PRODUCTS.GET_PRODUCTS_REQUEST, productsWorker);
}
