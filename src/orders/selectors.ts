import { Product } from '../products/reducer';
import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';

export const selectOrders = (state: RootState) => state.orders;

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

export const selectLoading = createSelector(
  selectOrders,
  (state) => state.loading
);

export const selectOrdersList = createSelector(
  selectOrders,
  (state): OrderItem[] => state.ordersList
);

export const selectOrderDetails = createSelector(
  selectOrders,
  (state) => state.orderDetails
);