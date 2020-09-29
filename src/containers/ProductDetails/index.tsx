import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { detailsLoading } from '../../products/actions';
import ProductCard from '../../components/ProductCard';
import { RootState } from '../../app/redux/rootReducer';

export interface ProductDetailsProps {
  productId: string;
}

export default function ProductDetails(props: ProductDetailsProps) {
  const { productId } = props;
  const dispatch = useDispatch();

  const selectDetails = (state: RootState) => state.details;
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(detailsLoading(productId));
  }, [dispatch, productId]);

  if (details.product) {
    const {
      id,
      isEditable,
      name,
      price,
      origin,
      createdAt,
      updatedAt,
    } = details.product;

    return (
      <div>
        <ProductCard
          id={id}
          isEditable={isEditable}
          name={name}
          price={price}
          origin={origin}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </div>
    );
  }

  return <div>No selected product.</div>;
}
