import { combineReducers } from 'redux';

import products, { ProductsState } from '../../products/reducer';

export interface RootState {
  products: ProductsState;
}

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
