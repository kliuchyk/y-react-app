import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestProducts } from '../../products/actions';
import { RootState } from '../../app/redux/rootReducer';
import ProductCard, { Product } from '../../components/ProductCard';
import './styles.css';

const selectProducts = (state: RootState) => state.products;

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (!products.allIds.length) {
      dispatch(requestProducts());
    }
  }, [dispatch, products.allIds.length]);

  const productsCopy: Product[] = [...(Object.values(products.byId) as Product[])];

  return (
    <>
      <h1 className='page-title'>PRODUCTS</h1>
      <div className="container">
        {productsCopy.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            isEditable={product.isEditable}
            name={product.name}
            price={product.price}
            origin={product.origin}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
