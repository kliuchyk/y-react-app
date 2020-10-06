import { modalsReducer, ModalsState } from './../../modals/reducer';
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
import { originReducer, OriginsState } from '../../origins/reducer';

export interface RootState {
  products: ProductsState;
  details: DetailsState;
  cartItems: CartState;
  filters: FiltersState;
  pagination: PaginationState;
  modals: ModalsState;
  origins: OriginsState;
}

const rootReducer = combineReducers({
  products: productsReducer,
  details: productDetailsReducer,
  cartItems: cartReducer,
  filters: filterReducer,
  pagination: paginationReducer,
  modals: modalsReducer,
  origins: originReducer,
});

export default rootReducer;
