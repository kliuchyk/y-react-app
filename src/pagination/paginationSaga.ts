import { put, select, takeEvery, call } from 'redux-saga/effects';

import { RootState } from '../app/redux/rootReducer';
import { PAGINATION_ACTION_TYPES } from './actionTypes';
import { RequestProductsProps, getProducts } from '../api/products';
import { setError, setProducts } from '../products/actions';
import { setCurrentPage, setTotalItems } from './actions';

type CurrentPageParams = { page: number; type: string; isEditable: boolean };

const getOrigins = (state: RootState) => state.filters.origins;
const getPrice = (state: RootState) => state.filters.price;
const getPageSize = (state: RootState) => state.pagination.perPage;

function* paginationSagaWorker({ page, isEditable }: CurrentPageParams) {
  const price = yield select(getPrice);
  const origins = yield select(getOrigins);
  const perPage = yield select(getPageSize);

  const reqParams: RequestProductsProps = {
    origins,
    price,
    page,
    perPage,
    isEditable
  };

  try {
    const response = yield call(getProducts, reqParams);
    const { products, totalItems } = response;

    yield put(setProducts(products));
    yield put(setTotalItems(totalItems));
  } catch (error) {
    setError(error);
  }
}

function* changePageSizeWorker({ isEditable }: CurrentPageParams) {
  yield put(setCurrentPage(1, isEditable));
}

export default function* paginationSagaWatcher() {
  yield takeEvery(PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE, paginationSagaWorker);
  yield takeEvery(PAGINATION_ACTION_TYPES.SET_PAGE_SIZE, changePageSizeWorker);
}
