import { PRODUCT_ACTION_TYPES } from './actionTypes';

export const requestProducts = () => ({
  type: PRODUCT_ACTION_TYPES.GET_PRODUCTS_REQUEST,
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
