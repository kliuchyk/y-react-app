import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import ProductsPage from '../../pages/ProductsPage';
import MyProductsPage from '../../pages/MyProducts';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import ShoppingCartPage from '../../pages/ShoppingCartPage';
import Modal from '../../modals/containers/Modal';
import RoutePaths from './paths';
import { selectAddNewProductModal } from '../../modals/selectors';
import { toggleAddNewProductModal } from '../../modals/actions';
import { CreateProductForm } from '../../products/containers/CreateProductForm';
import { useGetProductsOrigin } from '../../hooks/useGetProductsOrigin';

export default function AppRoutes() {
  const isOpen = useSelector(selectAddNewProductModal);
  const dispatch = useDispatch();
  const { getProductsOrigins } = useGetProductsOrigin();

  const closeModal = () => {
    dispatch(toggleAddNewProductModal(false));
  };

  useEffect(() => {
    getProductsOrigins();
  }, [getProductsOrigins]);

  return (
    <div>
      <Header />

      <main>
        <Switch>
          <Route path={RoutePaths.Products._()} exact component={ProductsPage} />
          <Route path={RoutePaths.MyProducts._()} exact component={MyProductsPage} />
          <Route path={RoutePaths.Cart._()} component={ShoppingCartPage} />
          <Route
            path={RoutePaths.Products.ById._()}
            exact
            component={ProductDetailsPage}
          />
          <Redirect path="*" to={RoutePaths.Products._()} />
        </Switch>
      </main>

      {isOpen && (
        <Modal title="Add new product" onClose={closeModal}>
          <CreateProductForm />
        </Modal>
      )}
    </div>
  );
}
