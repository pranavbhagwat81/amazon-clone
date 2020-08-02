import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import "../index.css";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Nav />
            Checkout
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
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
