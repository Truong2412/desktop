import React from 'react';
import { Route,Switch } from 'react-router';
import CartAndOrder from '../features/cartAndOrder/CartAndOrder';
import HomePage from '../features/HomePage';
import ProductDetail from '../features/productDetail/ProductDetail'
import ProductFilter from '../features/productFilter/ProductFilter';
function DirectionRouter(props) {
    return (
        <Switch>
          <Route path="/cart" >
            <CartAndOrder />
          </Route>
          <Route path="/:brand/:name/:id">
            <ProductDetail />
          </Route>
          <Route path="/:brand/:series" >
            <ProductFilter />
          </Route>
          <Route path="/:brand" >
            <ProductFilter/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>


        </Switch>
    );
}

export default DirectionRouter;