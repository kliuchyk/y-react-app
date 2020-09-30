import { PAGINATION_ACTION_TYPES } from './actionTypes';

export interface PaginationState {
  page: number;
  perPage: number;
  totalItems: number;
}

export const paginationInitialState: PaginationState = {
  page: 1,
  perPage: 20,
  totalItems: 0,
};

export interface PaginationAction {
  type: string;
  totalItems?: number;
  page?: number;
  perPage?: number;
}

export const paginationReducer = (
  state = paginationInitialState,
  action: PaginationAction
) => {
  switch (action.type) {
    case PAGINATION_ACTION_TYPES.SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.totalItems,
      };
    case PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};
