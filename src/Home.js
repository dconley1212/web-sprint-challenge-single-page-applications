import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <div className="home-wrapper">
        <h2>Your favorite Pizza, delivered while coding</h2>
        <Link to="/pizza">
          <button>Order Now!</button>
        </Link>
      </div>
    </div>
  );
}
