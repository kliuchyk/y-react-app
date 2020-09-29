import { combineReducers } from 'redux';

import {
  productsReducer,
  productDetailsReducer,
  ProductsState,
  DetailsState,
} from '../../products/reducer';
import { cartReducer, CartState } from '../../cart/reducer';
import { filterReducer, FiltersState } from '../../filters/reducer';
import { paginationReducer, PaginationState } from '../../pagination/reducer';

export interface RootState {
  products: ProductsState;
  details: DetailsState;
  cartItems: CartState;
  filters: FiltersState;
  pagination: PaginationState;
}

const rootReducer = combineReducers({
  products: productsReducer,
  details: productDetailsReducer,
  cartItems: cartReducer,
  filters: filterReducer,
  pagination: paginationReducer,
});

export default rootReducer;
