import { FILTER_ACTION_TYPES } from './actionTypes';

export interface OriginsFilter {
  origins: [] | string[];
}

export interface PriceFilter {
  price: [] | number[];
}

export interface FiltersState {
  origins: [] | string[];
  price: [] | number[];
}

export interface FilterAction {
  type: string;
  origins: [] | string[];
  price: [] | number[];
}

export const initialFiltersState: FiltersState = {
  origins: [],
  price: [],
};

export const filterReducer = (state = initialFiltersState, action: FilterAction) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.CHANGE_ORIGINS_FILTER:
      return {
        ...state,
        origins: [...action.origins],
      };
    case FILTER_ACTION_TYPES.CHANGE_PRICE_FILTER:
      return {
        ...state,
        price: [...action.price],
      };
    default:
      return state;
  }
};
