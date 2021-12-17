import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Pizza from "./Pizza";
import OrderForm from "./OrderForm";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Now</Link>
      </div>
      <Switch>
        <Route>
          <Pizza path="/pizza/id" />
        </Route>
        <Route path="/pizza">
          <OrderForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
