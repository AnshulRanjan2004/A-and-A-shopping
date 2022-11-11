import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/products' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>

    // <Link to="signup">
    //     <button className="btn">Sign Up</button>
    // </Link>
  );
};


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Button.css";

// function Button() {
//   return (
//     <Link to="signup">
//       <button className="btn">Sign Up</button>
//     </Link>
//   );
// }

// export default Button;