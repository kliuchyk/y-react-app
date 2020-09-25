import { CART_ACTION_TYPES } from './actionTypes';
import { Product } from '../products/reducer';

export interface CartState {
  [key: string]: number;
}

export interface CartProduct extends Product {
  amount: number;
  totalPrice: number;
}

const initialState: CartState = {};

export const cartReducer = (state = initialState, action: any) => {
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
        [product]: state[product] > 0 ? state[product] - 1 : 0,
      };
    case CART_ACTION_TYPES.DELETE_FROM_CART:
      const { [action.productId]: productToDelete, ...rest } = state;
      return {
        ...rest,
      };
    default:
      return state;
  }
};
