import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import "../index.css";
import Product from "./Product";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Nav />
            Checkout
          </Route>
          <Route path="/login">Login</Route>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
