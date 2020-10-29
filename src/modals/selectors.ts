import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';

export const selectModals = (state: RootState) => state.modals;

export const selectAddNewProductModal = createSelector(
  selectModals,
  (state) => state.addNewProduct.isOpen
);

export const selectEditModalIsOpen = createSelector(
  selectModals,
  (state) => state.editProduct.isOpen
);

export const selectEditModalProduct = createSelector(
  selectModals,
  (state) => state.editProduct.product
);
