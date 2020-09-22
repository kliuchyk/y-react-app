import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestProducts } from '../../products/actions';
import { RootState } from '../../app/redux/rootReducer';

const selectProducts = (state: RootState) => state.products;

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (!products.allIds.length) {
      console.log('PRODUCTS:', products.allIds.length)
      dispatch(requestProducts());
    }
  }, [dispatch, products.allIds.length]);

  return (
    <div>
      <h1>Products page</h1>
    </div>
  );
}

export default ProductsPage;
