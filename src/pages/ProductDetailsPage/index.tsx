import React from 'react';
import { useParams } from 'react-router-dom';

import ProductDetails from '../../containers/ProductDetails';
import './styles.css';

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="container">
      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductDetailsPage;
