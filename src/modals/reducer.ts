import { MODALS_ACTION_TYPES } from './actionTypes';

export interface ModalsState {
  [key: string]: {
    isOpen: boolean;
  };
}

export const modalsInitialState: ModalsState = {
  addNewProduct: {
    isOpen: false,
  },
};

type Action = { type: 'toggleAddNewProductModal'; isOpen: boolean };

export const modalsReducer = (state = modalsInitialState, action: Action) => {
  switch (action.type) {
    case MODALS_ACTION_TYPES.TOGGLE_NEW_PRODUCT_MODAL:
      return {
        ...state,
        addNewProduct: {
          isOpen: action.isOpen,
        },
      };
    default:
      return state;
  }
};
