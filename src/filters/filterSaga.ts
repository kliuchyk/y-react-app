import { put, takeEvery } from 'redux-saga/effects';

import { FILTER_ACTION_TYPES } from './actionTypes';
import { setCurrentPage } from '../pagination/actions';
import { FIRST_PAGE } from '../constants';

type FilterActionParams = { page: number; type: string; isEditable: boolean };

function* filterSagaWorker({ isEditable }: FilterActionParams) {
  yield put(setCurrentPage(FIRST_PAGE, isEditable));
}

export default function* filterSagaWatcher() {
  yield takeEvery(FILTER_ACTION_TYPES.CHANGE_FILTERS, filterSagaWorker);
}
