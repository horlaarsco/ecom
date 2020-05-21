import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Header, Footer } from "./components";
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
} from "./pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/admin/add-product'>
            <AddProduct />
          </Route>
          <Route path='/admin/add-brand'>
            <AddBrand />
          </Route>

          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/product/:slug'>
            <Product />
          </Route>
          <Route path={`/brand/:brand`}>
            <Brand />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/men'>
            <Gender gender='Men' />
          </Route>
          <Route path='/women'>
            <Gender gender='Women' />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
