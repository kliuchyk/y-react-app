import { CART_ACTION_TYPES } from './actionTypes';
import { Product } from '../products/reducer';

export interface CartState {
  [key: string]: number;
}

export interface CartProduct extends Product {
  amount: number;
  totalPrice: number;
}

export interface CartAction {
  type: string;
  productId: string;
  count?: number;
}

const initialState: CartState = {};

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CART_ACTION_TYPES.INCREMENT_PRODUCT:
      return {
        ...state,
        [action.productId]: state[action.productId] + 1 || 1,
      };
    case CART_ACTION_TYPES.DECREMENT_PRODUCT:
      const product = action.productId;
      return {
        ...state,
        [product]: state[product] > 1 ? state[product] - 1 : 1,
      };
    case CART_ACTION_TYPES.DELETE_FROM_CART:
      const { [action.productId]: productToDelete, ...rest } = state;
      return {
        ...rest,
      };
    case CART_ACTION_TYPES.CHANGE_PRODUCT_COUNT:
      return {
        ...state,
        [action.productId]: action.count,
      };
    default:
      return state;
  }
};
