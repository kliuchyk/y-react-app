import { CART_ACTION_TYPES } from './actionTypes';

export const incrementProduct = (productId: string) => ({
  type: CART_ACTION_TYPES.INCREMENT_PRODUCT,
  productId,
});

export const decrementProduct = (productId: string) => ({
  type: CART_ACTION_TYPES.DECREMENT_PRODUCT,
  productId,
});

export const deleteFromCart = (productId: string) => ({
  type: CART_ACTION_TYPES.DELETE_FROM_CART,
  productId,
});

export const changeProductCount = (count: number, productId: string) => ({
  type: CART_ACTION_TYPES.CHANGE_PRODUCT_COUNT,
  count,
  productId,
})