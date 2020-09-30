import { PAGINATION_ACTION_TYPES } from './actionTypes';

export const setCurrentPage = (page: number) => ({
  type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
  page,
});

export const setTotalItems = (totalItems: number) => ({
  type: PAGINATION_ACTION_TYPES.SET_TOTAL_ITEMS,
  totalItems,
});
