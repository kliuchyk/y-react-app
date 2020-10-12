import React from 'react';

import ProductCard from '../../components/ProductCard';
import { Product } from '../../reducer';

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="container">
      {products.map((product) => (
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
  );
};

export default ProductsList;
