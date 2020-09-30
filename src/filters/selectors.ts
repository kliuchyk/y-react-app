import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';

export const selectFilters = (state: RootState) => state.filters;

export const selectOrigins = createSelector(selectFilters, (state) => state.origins);
export const selectPrice = createSelector(selectFilters, (state) => state.price);
