import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Pizza from "./Pizza";
import OrderForm from "./OrderForm";
import formSchema from "./formSchema";
import * as yup from "yup";
import axios from "axios";

const initialOrderInfo = {
  name: "",
  size: "",
  peperoni: false,
  onions: false,
  peppers: false,
  olives: false,
  special: "",
};

const initialFormErrors = {
  name: "",
};

const initialDisabled = true;

const newOrders = [];

const App = () => {
  const [orderInfo, setOrderInfo] = useState(initialOrderInfo);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState(newOrders);

  const validateOrder = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const orderChange = (name, value) => {
    validateOrder(name, value);
    setOrderInfo({ ...orderInfo, [name]: value });
  };

  const postOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((response) => {
        console.log(response);
        setOrders([...orders, response]);
      })
      .catch((err) => console.log(err))
      .finally(() => setOrderInfo(initialOrderInfo));
  };

  const orderSubmit = () => {
    const newOrder = {
      name: orderInfo.name.trim(),
      size: orderInfo.size,
      peperoni: orderInfo.peperoni,
      onions: orderInfo.onions,
      peppers: orderInfo.peppers,
      olives: orderInfo.olives,
      special: orderInfo.special.trim(),
    };

    postOrder(newOrder);
  };

  useEffect(() => {
    formSchema.isValid(orderInfo).then((valid) => setDisabled(!valid));
  });

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pizza">Order</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <OrderForm
          orderInfo={orderInfo}
          orderChange={orderChange}
          orderSubmit={orderSubmit}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
      <Route>
        <Pizza path="/pizza/:id" orders={orders} />
      </Route>
    </div>
  );
};
export default App;
