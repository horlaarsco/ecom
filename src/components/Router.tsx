import React, { useEffect, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  Home,
  Auth,
  Cart,
  Checkout,
  Gender,
  Brand,
  Product,
  AddProduct,
  AddBrand,
  Profile,
} from "../pages";

import { PrivateRoute, AdminRoute, Loader, EmptyPage } from "./";
import { AuthContext } from "../App";

export default function Router() {
  const LoggedInStatus: any = useContext(AuthContext);

  return (
    <Switch>
      <AdminRoute path='/admin/add-brand'>
        <AddBrand />
      </AdminRoute>
      <AdminRoute path='/admin/add-product'>
        <AddProduct />
      </AdminRoute>
      <Route path='/auth'>
        {LoggedInStatus.loggedIn ? <Redirect to='/profile' /> : <Auth />}
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/profile'>
        {LoggedInStatus.loggedIn ? <Profile /> : <Redirect to='/auth' />}
      </Route>
      <Route path='/product/:slug'>
        <Product />
      </Route>
      <Route path='/brand/:slug'>
        <Brand />
      </Route>
      <Route path='/checkout'>
        <Checkout />
      </Route>
      <Route path='/male'>
        <Gender gender='Male' />
      </Route>
      <Route path='/female'>
        <Gender gender='Female' />
      </Route>
      <Route path='/unisex'>
        <Gender gender='Unisex' />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}
