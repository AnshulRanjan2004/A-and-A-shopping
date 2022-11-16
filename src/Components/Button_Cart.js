import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button_Cart() {
  return (
    <Link to="cart">
      <button className="btn-cart">Cart</button>
    </Link>
  );
}

export default Button_Cart;