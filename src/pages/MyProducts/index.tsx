import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../modals/containers/Modal';
import EditProductForm from '../../products/containers/EditProductForm';
import FilterMenu from '../../filters/containers/FilterMenu';
import ProductsList from '../../products/containers/ProductsList';
import Pagination from '../../pagination/containers/Pagination';
import { setCurrentPage } from '../../pagination/actions';
import { Product } from '../../products/reducer';
import { selectProductItems } from '../../products/selectors';
import { selectEditModalIsOpen } from '../../modals/selectors';
import { cancelProductEdit } from '../../modals/actions';
import { FIRST_PAGE } from '../../constants';

function MyProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductItems);

  const isModalOpen = useSelector(selectEditModalIsOpen);

  useEffect(() => {
    dispatch(setCurrentPage(FIRST_PAGE, true));
  }, [dispatch]);

  const productsItems: Product[] = [...(Object.values(products) as Product[])];

  const closeModal = () => {
    dispatch(cancelProductEdit());
  };

  return (
    <>
      <h1 className="page-title">MY PRODUCTS</h1>
      <div className="filters">
        <FilterMenu isEditable={true} />
      </div>
      <ProductsList products={productsItems} />
      <Pagination isEditable={true} />

      {isModalOpen && (
        <Modal title="Edit product" onClose={closeModal}>
          <EditProductForm />
        </Modal>
      )}
    </>
  );
}

export default MyProductsPage;
