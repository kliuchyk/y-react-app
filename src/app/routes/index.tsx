import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import Loader from '../../components/Loader';
import Header from '../../components/Header';
import ProductsPage from '../../pages/ProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import ShoppingCartPage from '../../pages/ShoppingCartPage';
import RoutePaths from './paths';

export default function AppRoutes() {
  return (
    <div>
      <Header />

      <main>
        <Switch>
          <Route path={RoutePaths.Products._()} exact component={ProductsPage} />
          <Route path={RoutePaths.Cart._()} component={ShoppingCartPage} />
          <Route path={RoutePaths.Products.ById._()} exact component={ProductDetailsPage} />
          <Redirect path="*" to={RoutePaths.Products._()} />
        </Switch>
      </main>
    </div>
  );
}
