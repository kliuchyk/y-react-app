import { FILTER_ACTION_TYPES } from './actionTypes';
import { OriginsFilter, PriceFilter } from './reducer';

export const changeOriginFilter = (origins: OriginsFilter) => ({
  type: FILTER_ACTION_TYPES.CHANGE_ORIGINS_FILTER,
  origins,
});

export const changePriceFilter = (price: PriceFilter) => ({
  type: FILTER_ACTION_TYPES.CHANGE_ORIGINS_FILTER,
  price,
});
