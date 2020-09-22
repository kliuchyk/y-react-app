import { PRODUCTS } from './actionTypes';

const initialState = {
  loading: false,
  byId: {},
  allIds: [],
  // maybe this need to be moved to another reducer - "basket"
  inBasket: {},
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
      return {
        ...state,
        byId: {
          ...state.byId,
          // add util function to generate byId
          ...action.products,
        },
        allIds: [...state.allIds, action.products],
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
