import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';

export const selectPaginationData = (state: RootState) => state.pagination;

export const selectPageSize = createSelector(
  selectPaginationData,
  (state) => state.perPage
);

export const selectCurrentPage = createSelector(
  selectPaginationData,
  (state) => state.page
);

export const selectTotalItems = createSelector(
  selectPaginationData,
  (state) => state.totalItems
);
