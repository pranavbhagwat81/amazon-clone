import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/checkout">Checkout</Route>
          <Route path="/login">Login</Route>
          <Route path="/">Home Page</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
