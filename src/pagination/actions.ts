import { PAGINATION_ACTION_TYPES } from './actionTypes';

export const setTotalItems = (totalItems: number) => ({
  type: PAGINATION_ACTION_TYPES.SET_TOTAL_ITEMS,
  totalItems,
});