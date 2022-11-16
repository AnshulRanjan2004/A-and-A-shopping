import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button_SU() {
  return (
    <Link to="signup">
      <button className="btn-cart">Sign Up</button>
    </Link>
  );
}

export default Button_SU;
