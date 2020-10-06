import { PRODUCT_ACTION_TYPES } from './actionTypes';

export interface Product {
  isEditable: boolean;
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
  amount?: number;
  totalPrice?: number;
}

export interface NewProduct {
  name: string;
  price: number;
  origin: string;
}

export interface Products {
  [key: string]: Product;
}

export interface ProductsState {
  loading: boolean;
  byId: {};
  allIds: string[];
  selectedProducts: {};
  error: null | string;
}

export interface DetailsState {
  loading: boolean;
  error: null | string;
  product: Product;
}

const initialProductsState = {
  loading: false,
  byId: {},
  allIds: [],
  selectedProducts: {},
  error: null,
};

const initialDetailsState = {
  loading: false,
  error: null,
  product: null,
};

export function productsReducer(state = initialProductsState, action: any) {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.GET_PRODUCTS_REQUEST:
    case PRODUCT_ACTION_TYPES.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case PRODUCT_ACTION_TYPES.GET_PRODUCTS_SUCCESS:
      const { byId, allIds } = action.products;
      return {
        ...state,
        byId: {
          ...byId,
        },
        allIds: [...allIds],
        loading: false,
      };
    case PRODUCT_ACTION_TYPES.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function productDetailsReducer(state = initialDetailsState, action: any) {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCT_ACTION_TYPES.DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case PRODUCT_ACTION_TYPES.DETAILS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
