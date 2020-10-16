import { CartActionTypes, ProductId, ProductCount } from './actions';
import { ONE_PRODUCT_ITEM } from './constants';
import { CART_ACTION_TYPES } from './actionTypes';

export interface CartState {
  [key: string]: CartProduct;
};

export interface CartProduct {
  productId: string;
  name: string;
  origin: string;
  price: number;
  count: number;
};

const initialState: CartState = {};

export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_PRODUCT:
      const { productId, name, origin, price } = action.payload as CartProduct;
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
      const { productId: id } = action.payload as ProductId;
      return {
        ...state,
        [id]: {
          ...state[id],
          count: state[id].count + ONE_PRODUCT_ITEM,
        },
      };
    case CART_ACTION_TYPES.DECREMENT_PRODUCT:
      const { productId: prodId } = action.payload as ProductId;
      return {
        ...state,
        [prodId]: {
          ...state[prodId],
          count: state[prodId].count > ONE_PRODUCT_ITEM ? state[prodId].count - ONE_PRODUCT_ITEM : ONE_PRODUCT_ITEM,
        },
      };
    case CART_ACTION_TYPES.DELETE_PRODUCT_FROM_CART:
      const { productId: ID } = action.payload as ProductId;
      const { [ID]: productToDelete, ...rest } = state;
      return {
        ...rest,
      };
    case CART_ACTION_TYPES.CHANGE_PRODUCT_COUNT:
      const { productId: changeProdId, count } = action.payload as ProductCount;
      return {
        ...state,
        [changeProdId]: {
          ...state[changeProdId],
          count: count,
        },
      };
    case CART_ACTION_TYPES.EMPTY_CART:
      return initialState;
    default:
      return state;
  }
};
