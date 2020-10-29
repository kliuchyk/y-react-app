import { PAGINATION_ACTION_TYPES } from './actionTypes';

export const setCurrentPage = (page: number, isEditable: boolean) => ({
  type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
  page,
  isEditable
});

export const setTotalItems = (totalItems: number) => ({
  type: PAGINATION_ACTION_TYPES.SET_TOTAL_ITEMS,
  totalItems,
});

export const setPageSize = (perPage: number) => ({
  type: PAGINATION_ACTION_TYPES.SET_PAGE_SIZE,
  perPage,
})
