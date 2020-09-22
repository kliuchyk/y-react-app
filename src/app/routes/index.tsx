import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import Loader from '../../components/Loader';
import Header from '../../containers/Header';
import ProductsPage from '../../pages/ProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import BasketPage from '../../pages/BasketPage';
import RoutePaths from './paths';

export default function AppRoutes() {
  return (
    <div>
      <Header />

      <main>
        <Switch>
          <Route path={RoutePaths.Products._()} exact component={ProductsPage} />
          <Route path={RoutePaths.Basket._()} component={BasketPage} />
          <Route path={RoutePaths.Products.ById._()} exact component={ProductDetailsPage} />
          <Redirect path="*" to={RoutePaths.Products._()} />
        </Switch>
      </main>
    </div>
  );
}
