import { PRODUCTS } from './actionTypes';

export interface ProductsState {
  loading: boolean,
  byId: {},
  allIds: string[],
  selectedProducts: {},
  error: null | string,
}

const initialState = {
  loading: false,
  byId: {},
  allIds: [],
  selectedProducts: {},
  error: null,
};

export default function productsReducer(state = initialState, action: any) {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case PRODUCTS.GET_PRODUCTS_SUCCESS:
      const { byId, allIds } = action.products;
      return {
        ...state,
        byId: {
          ...state.byId,
          ...byId,
        },
        allIds: [...state.allIds, ...allIds],
        loading: false,
      };
    case PRODUCTS.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
