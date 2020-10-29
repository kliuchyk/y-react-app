import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import ProductsTable from '../../../components/ProductsTable';
import {
  selectPickedProductsList,
  selectProductsForOrder,
} from '../../selectors';
import { selectLoading } from '../../../orders/selectors';
import { makeOrderRequest } from '../../../orders/actions';

const CartProducts = () => {
  const history = useHistory();
  const products = useSelector(selectPickedProductsList);
  const loading = useSelector(selectLoading);
  const productsForOrder = useSelector(selectProductsForOrder);
  const dispatch = useDispatch();

  const handleOrderRequest = () => {
    dispatch(makeOrderRequest({ pieces: productsForOrder }, history));
  };

  return (
    <>
      <ProductsTable products={products} />
      {products.length > 0 && (
        <Button
          type="primary"
          size="small"
          loading={loading}
          onClick={handleOrderRequest}
        >
          Make Order
        </Button>
      )}
    </>
  );
};

export default CartProducts;
