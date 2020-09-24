import { takeEvery, put, call, select } from 'redux-saga/effects';

import { PRODUCT_ACTION_TYPES } from '../actionTypes';
import { detailsFetchSuccess, detailsFetchError } from '../actions';
import { getProductById } from '../../api/products';
import { RootState } from '../../app/redux/rootReducer';

type Params = { payload: string; type: string };

const getSelected = (store: RootState) => store.details.product;

function* detailsSagaWorker({ payload }: Params) {
  const selected = yield select(getSelected);

  if (selected && selected.id === payload) {
    return;
  }

  try {
    const details = yield call(getProductById, payload);
    yield put(detailsFetchSuccess(details));
  } catch (error) {
    yield put(detailsFetchError(error.toString()));
  }
}

export default function* productDetailsSaga() {
  yield takeEvery(PRODUCT_ACTION_TYPES.DETAILS_LOADING, detailsSagaWorker);
}
