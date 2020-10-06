import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';

export const selectModals = (state: RootState) => state.modals;

export const selectAddNewProductModal = createSelector(
  selectModals,
  (state) => state.addNewProduct.isOpen
);
