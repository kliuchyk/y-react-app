import { createSelector } from 'reselect';
import { CartState } from '../../cart/reducer';
import { Products } from '../../products/reducer';

import { RootState } from './rootReducer';

export const selectProducts = (state: RootState) => state.products;
export const selectDetails = (state: RootState) => state.details;
export const selectCartItems = (state: RootState) => state.cartItems;

export const selectProductItems = createSelector(
  selectProducts,
  (state) => state.byId
);

export const selectCartTotalPrice = createSelector(
  selectProductItems,
  selectCartItems,
  (products: Products, selectedItems: CartState) =>
    Object.keys(selectedItems).reduce((prev: number, curr: string) => {
      return products[curr].price * selectedItems[curr] + prev;
    }, 0)
);

export const selectPickedProductsCount = createSelector(
  selectCartItems,
  (productItems: CartState) =>
    Object.values(productItems).reduce((acc: number, curr: number) => acc + curr, 0)
);

export const selectPickedProductsList = createSelector(
  selectProductItems,
  selectCartItems,
  (allProducts: Products, selectedItems: CartState) =>
    Object.keys(selectedItems).map((id: string) => {
      const product = { ...allProducts[id] };
      product.amount = selectedItems[id];
      product.totalPrice = allProducts[id].price * selectedItems[id];
      return product;
    })
);
