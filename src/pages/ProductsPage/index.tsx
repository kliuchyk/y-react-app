import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../pagination/actions';
import ProductCard from '../../components/ProductCard';
import Pagination from '../../pagination/containers/Pagination';
import FilterMenu from '../../filters/containers/FilterMenu';
import { Product } from '../../products/reducer';
import { selectProductItems } from '../../products/selectors';
import './styles.css';

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductItems);

  useEffect(() => {
    dispatch(setCurrentPage(1, false));
  }, [dispatch]);

  const productsCopy: Product[] = [...(Object.values(products) as Product[])];

  return (
    <>
      <h1 className="page-title">PRODUCTS</h1>
      <div className="filters">
        <FilterMenu />
      </div>
      <div className="container">
        {productsCopy.map((product) => (
          <Link to={`products/${product.id}`} key={product.id}>
            <ProductCard
              id={product.id}
              isEditable={product.isEditable}
              name={product.name}
              price={product.price}
              origin={product.origin}
              createdAt={product.createdAt}
              updatedAt={product.updatedAt}
              hoverable
            />
          </Link>
        ))}
      </div>
      <Pagination />
    </>
  );
}

export default ProductsPage;
