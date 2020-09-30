import { put, takeEvery } from 'redux-saga/effects';

import { FILTER_ACTION_TYPES } from './actionTypes';
import { setCurrentPage } from '../pagination/actions';

function* filterSagaWorker() {
  yield put(setCurrentPage(1));
}

export default function* filterSagaWatcher() {
  yield takeEvery(FILTER_ACTION_TYPES.CHANGE_FILTERS, filterSagaWorker);
}
