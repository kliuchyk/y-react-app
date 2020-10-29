import { SelectedProduct } from './../products/reducer';
import { MODALS_ACTION_TYPES } from './actionTypes';

export const toggleAddNewProductModal = (isOpen: boolean) => ({
  type: MODALS_ACTION_TYPES.TOGGLE_NEW_PRODUCT_MODAL,
  isOpen,
});

export const startEditModal = (product: SelectedProduct) => ({
  type: MODALS_ACTION_TYPES.START_PRODUCT_EDIT,
  product
});

export const editProductSuccess = () => ({
  type: MODALS_ACTION_TYPES.EDIT_PRODUCT_SUCCESS,
});

export const cancelProductEdit = () => ({
  type: MODALS_ACTION_TYPES.CANCEL_PRODUCT_EDIT,
})
