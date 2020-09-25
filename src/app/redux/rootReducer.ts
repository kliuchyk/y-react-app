import { combineReducers } from 'redux';

import {
  productsReducer,
  productDetailsReducer,
  DetailsState,
  ProductsState,
} from '../../products/reducer';
import { cartReducer, CartState } from '../../cart/reducer';

export interface RootState {
  products: ProductsState;
  details: DetailsState;
  cartItems: CartState;
}

const rootReducer = combineReducers({
  products: productsReducer,
  details: productDetailsReducer,
  cartItems: cartReducer,
});

export default rootReducer;
