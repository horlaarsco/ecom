import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Auth, Cart, Checkout, Gender } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/cart'>
            <Cart />
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
