import { SelectedProduct } from './../products/reducer';
import { MODALS_ACTION_TYPES } from './actionTypes';

export interface ModalsState {
  [key: string]: {
    isOpen: boolean;
    product?: SelectedProduct | null
  };
}

export const modalsInitialState: ModalsState = {
  addNewProduct: {
    isOpen: false,
  },
  editProduct: {
    isOpen: false,
    product: null
  }
};

export const modalsReducer = (state = modalsInitialState, action: any) => {
  switch (action.type) {
    case MODALS_ACTION_TYPES.TOGGLE_NEW_PRODUCT_MODAL:
      return {
        ...state,
        addNewProduct: {
          isOpen: action.isOpen,
        },
      };
    case MODALS_ACTION_TYPES.START_PRODUCT_EDIT:
      return {
        ...state,
        editProduct: {
          isOpen: true,
          product: action.product
        },
      };
    case MODALS_ACTION_TYPES.EDIT_PRODUCT_SUCCESS:
    case MODALS_ACTION_TYPES.CANCEL_PRODUCT_EDIT:
      return {
        ...state,
        editProduct: {
          isOpen: false,
        },
      }
    default:
      return state;
  }
};
