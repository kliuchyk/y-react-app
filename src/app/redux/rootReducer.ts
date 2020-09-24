import { combineReducers } from 'redux';

import { productsReducer, productDetailsReducer, DetailsState, ProductsState } from '../../products/reducer';

export interface RootState {
  products: ProductsState;
  details: DetailsState;
}

const rootReducer = combineReducers({
  products: productsReducer,
  details: productDetailsReducer
});

export default rootReducer;
