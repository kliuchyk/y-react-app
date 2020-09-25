import React from 'react';
import { useSelector } from 'react-redux';

import { selectPickedProductsList } from '../../app/redux/selectors';
import ProductsTable from '../../components/ProductsTable';

const CartProducts = () => {
  const products = useSelector(selectPickedProductsList);

  return <ProductsTable products={products} />;
}

export default CartProducts;
