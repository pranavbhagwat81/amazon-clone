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
          <Route path={`/amazon-clone/checkout`} exact>
            <Nav />
            <Checkout />
          </Route>
          <Route path={`/amazon-clone/signup`} exact>
            <Signup />
          </Route>
          <Route path={`/amazon-clone/login`} exact>
            <Login />
          </Route>
          <Route path={`/amazon-clone/`} exact>
            <Nav />
            <Home />
          </Route>
          <Route path={`/amazon-clone/home`} exact>
            <Nav />
            <Home />
          </Route>
          <Route path={`/amazon-clone/order`}>
            <Nav />
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
