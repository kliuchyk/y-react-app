import { Product } from '../products/reducer';
import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';
// import { OrderItem } from './reducer';

export const selectOrders = (state: RootState) => state.orders;

export const selectLoading = createSelector(
  selectOrders,
  (state) => state.loading
);

type ProductItem = {
  count: number,
  id: string,
  product: Product,
}

interface OrderItem {
  id: string;
  createdAt: string;
  pieces: ProductItem
}

export const selectOrdersList = createSelector(
  selectOrders,
  (state): OrderItem[] => state.ordersList
);