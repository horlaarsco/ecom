import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Auth } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/auth'>
            <Auth />
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
