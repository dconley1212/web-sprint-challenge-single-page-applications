import React from "react";

export default function pizza({ orders }) {
  return (
    <div className="ordered-pizza">
      <h2>Confirming your Order</h2>
      {orders.map((order) => {
        return (
          <div>
            <h3>{order.name}</h3>
            <p>{`It's a ${order.size} pizza`}</p>
            <ul>
              <li>{order.peperoni}</li>
              <li>{order.onions}</li>
              <li>{order.peppers}</li>
              <li>{order.olives}</li>
            </ul>
            <p>{order.special}</p>
          </div>
        );
      })}
    </div>
  );
}
