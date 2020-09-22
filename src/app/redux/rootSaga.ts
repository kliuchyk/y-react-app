import { all } from 'redux-saga/effects';

import products from '../../products/saga';

export default function* rootSaga() {
  yield all([products()])
}