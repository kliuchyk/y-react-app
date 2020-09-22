import { PRODUCTS } from './actionTypes';

export const requestProducts = () => ({
  type: PRODUCTS.GET_PRODUCTS_REQUEST,
});

export const setProducts = (products: any) => ({
  type: PRODUCTS.GET_PRODUCTS_SUCCESS,
  products,
});

export const setError = (error: string) => ({
  type: PRODUCTS.GET_PRODUCTS_FAILURE,
  error,
});
