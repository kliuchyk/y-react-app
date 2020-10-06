import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';
import { ProductsState } from './reducer';

export const selectProducts = (state: RootState) => state.products;

export const selectLoading = createSelector(
  selectProducts,
  (state: ProductsState) => state.loading
);
