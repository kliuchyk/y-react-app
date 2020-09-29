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

export interface CartAction {
  type: string;
  productId: string;
  count?: number;
}

export const paginationReducer = (state = paginationInitialState, action: any) => {
  switch(action.type) {
    case PAGINATION_ACTION_TYPES.SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.totalItems
      }
    default:
      return state;
  }
  
};
