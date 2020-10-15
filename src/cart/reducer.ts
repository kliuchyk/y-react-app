import { ONE_PRODUCT_ITEM } from './constants';
import { CART_ACTION_TYPES } from './actionTypes';

export interface CartState {
  [key: string]: CartProduct;
}

export interface CartProduct {
  productId: string;
  name: string;
  origin: string;
  price: number;
  count: number;
}

export interface CartAction {
  type: string;
  productId: string;
  product: CartProduct;
  count?: number;
}

const initialState: CartState = {};

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_PRODUCT:
      const { productId, name, origin, price } = action.product;
      return {
        ...state,
        [productId]: {
          productId,
          name,
          price,
          origin,
          count: state[productId] ? state[productId].count + ONE_PRODUCT_ITEM : ONE_PRODUCT_ITEM,
        },
      };

    case CART_ACTION_TYPES.INCREMENT_PRODUCT:
      return {
        ...state,
        [action.productId]: {
          ...state[action.productId],
          count: state[action.productId].count + ONE_PRODUCT_ITEM,
        },
      };
    case CART_ACTION_TYPES.DECREMENT_PRODUCT:
      const product = action.productId;
      return {
        ...state,
        [product]: {
          ...state[product],
          count: state[product].count > ONE_PRODUCT_ITEM ? state[product].count - ONE_PRODUCT_ITEM : ONE_PRODUCT_ITEM,
        },
      };
    case CART_ACTION_TYPES.DELETE_PRODUCT_FROM_CART:
      const { [action.productId]: productToDelete, ...rest } = state;
      return {
        ...rest,
      };
    case CART_ACTION_TYPES.CHANGE_PRODUCT_COUNT:
      return {
        ...state,
        [action.productId]: {
          ...state[action.productId],
          count: action.count,
        },
      };
    case CART_ACTION_TYPES.EMPTY_CART:
      return initialState;
    default:
      return state;
  }
};
