import { createSelector } from 'reselect';
import { CartState } from './reducer';

import { RootState } from '../app/redux/rootReducer';
import { selectProducts } from '../products/selectors'

export const selectDetails = (state: RootState) => state.details;
export const selectCartItems = (state: RootState) => state.cartItems;

export const selectProductItems = createSelector(
  selectProducts,
  (state) => state.byId
);

export const selectCartTotalPrice = createSelector(selectCartItems, (cartProducts) =>
  Object.keys(cartProducts).reduce((prev: number, curr: string) => {
    return cartProducts[curr].price * cartProducts[curr].count + prev;
  }, 0)
);

export const selectPickedProductsCount = createSelector(
  selectCartItems,
  (cartProducts: CartState) =>
    Object.keys(cartProducts).reduce((prev: number, curr: string) => {
      return prev + cartProducts[curr].count;
    }, 0)
);

export const selectPickedProductsList = createSelector(
  selectCartItems,
  (selectedItems: CartState) =>
    Object.keys(selectedItems).map((id) => {
      return {
        ...selectedItems[id],
        totalPrice: selectedItems[id].price * selectedItems[id].count,
      };
    })
);
