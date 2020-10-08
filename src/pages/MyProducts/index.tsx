import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard';
import FilterMenu from '../../filters/containers/FilterMenu';
import Pagination from '../../pagination/containers/Pagination';
import { setCurrentPage } from '../../pagination/actions';
import { Product } from '../../products/reducer';
import { selectProductItems } from '../../products/selectors';

function MyProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductItems);

  useEffect(() => {
    dispatch(setCurrentPage(1, true));
  }, [dispatch]);

  const productsItems: Product[] = [...(Object.values(products) as Product[])];

  return (
    <>
      <h1 className="page-title">MY PRODUCTS</h1>
      <div className="filters">
        <FilterMenu isEditable={true} />
      </div>

      <div className="container">
        {productsItems.map((product) => (
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

      <Pagination isEditable={true} />
    </>
  );
}

export default MyProductsPage;
