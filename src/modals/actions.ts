import { MODALS_ACTION_TYPES } from './actionTypes';

export const toggleAddNewProductModal = (isOpen: boolean) => ({
  type: MODALS_ACTION_TYPES.TOGGLE_NEW_PRODUCT_MODAL,
  isOpen,
});
