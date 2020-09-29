import { combineReducers } from 'redux';

import {
  productsReducer,
  productDetailsReducer,
  ProductsState,
  DetailsState,
} from '../../products/reducer';
import { cartReducer, CartState } from '../../cart/reducer';
import { filterReducer, FiltersState } from '../../filters/reducer';

export interface RootState {
  products: ProductsState;
  details: DetailsState;
  cartItems: CartState;
  filters: FiltersState;
}

const rootReducer = combineReducers({
  products: productsReducer,
  details: productDetailsReducer,
  cartItems: cartReducer,
  filters: filterReducer,
});

export default rootReducer;
