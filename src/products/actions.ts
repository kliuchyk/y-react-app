import { PRODUCT_ACTION_TYPES } from './actionTypes';
import { RequestProductsProps } from '../api/products';
import { NewProduct } from './reducer';

export const requestProducts = (payload?: RequestProductsProps) => ({
  type: PRODUCT_ACTION_TYPES.GET_PRODUCTS_REQUEST,
  payload,
});

export const setProducts = (products: any) => ({
  type: PRODUCT_ACTION_TYPES.GET_PRODUCTS_SUCCESS,
  products,
});

export const setError = (error: string) => ({
  type: PRODUCT_ACTION_TYPES.GET_PRODUCTS_FAILURE,
  error,
});

export const detailsLoading = (payload: string) => ({
  type: PRODUCT_ACTION_TYPES.DETAILS_LOADING,
  payload,
});

export const detailsFetchSuccess = (payload: string) => ({
  type: PRODUCT_ACTION_TYPES.DETAILS_FETCH_SUCCESS,
  payload,
});

export const detailsFetchError = (payload: string) => ({
  type: PRODUCT_ACTION_TYPES.DETAILS_FETCH_ERROR,
  payload,
});

export const createProductRequest = (product: NewProduct) => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT_REQUEST,
  product,
});

export const createProductSuccess = (product: NewProduct) => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT_SUCCESS,
});

export const createProductError = (error: string) => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT_FAILURE,
  error,
});
