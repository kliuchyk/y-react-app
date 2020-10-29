import { Action } from '../types/actions';
import { CART_ACTION_TYPES } from './actionTypes';
import { CartProduct } from './reducer';

export type ProductId = { productId: string };
export type ProductCount = { count: number, productId: string };

type AddProductAction = Action<typeof CART_ACTION_TYPES.ADD_PRODUCT, CartProduct>
type IncrementProductAction = Action<typeof CART_ACTION_TYPES.ADD_PRODUCT, ProductId>
type DecrementProductAction = Action<typeof CART_ACTION_TYPES.DECREMENT_PRODUCT, ProductId>
type DeleteFromCartAction = Action<typeof CART_ACTION_TYPES.DELETE_PRODUCT_FROM_CART, ProductId>
type ChangeProductCountAction = Action<typeof CART_ACTION_TYPES.CHANGE_PRODUCT_COUNT, ProductCount>
type EmptyCartAction = Action<typeof CART_ACTION_TYPES.EMPTY_CART>

export type CartActionTypes =
  | AddProductAction
  | IncrementProductAction
  | DecrementProductAction
  | DeleteFromCartAction
  | ChangeProductCountAction
  | EmptyCartAction;

export const addProduct = (payload: CartProduct): CartActionTypes => ({
  type: typeof CART_ACTION_TYPES.ADD_PRODUCT,
  payload
});

export const incrementProduct = (payload: ProductId): CartActionTypes => ({
  type: CART_ACTION_TYPES.INCREMENT_PRODUCT,
  payload
})

export const decrementProduct = (payload: ProductId): CartActionTypes => ({
  type: CART_ACTION_TYPES.DECREMENT_PRODUCT,
  payload
})
export const deleteFromCart = (payload: ProductId): CartActionTypes => ({
  type: CART_ACTION_TYPES.DELETE_PRODUCT_FROM_CART,
  payload
})

export const changeProductCount = (payload: ProductCount): CartActionTypes => ({
  type: CART_ACTION_TYPES.CHANGE_PRODUCT_COUNT,
  payload
});

export const emptyCart = (): CartActionTypes => ({
  type: CART_ACTION_TYPES.EMPTY_CART,
});
