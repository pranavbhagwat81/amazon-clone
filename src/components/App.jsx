import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import "../index.css";
import Login from "./Login";
import Signup from "./Signup";
import Checkout from "./Checkout";
import Order from "./Order";

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route path="/checkout" exact>
            <Nav />
            <Checkout />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Nav />
            <Home />
          </Route>
          <Route path="/home" exact>
            <Nav />
            <Home />
          </Route>
          <Route path="/order">
            <Nav />
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
