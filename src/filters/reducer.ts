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
  filters: {
    origins: [] | string[];
    price: [] | number[];
  };
}

export const initialFiltersState: FiltersState = {
  origins: [],
  price: [],
};

export const filterReducer = (state = initialFiltersState, action: FilterAction) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.CHANGE_FILTERS:
      const { origins, price } = action.filters;
      return {
        origins: [...origins],
        price: [...price],
      };
    default:
      return state;
  }
};
