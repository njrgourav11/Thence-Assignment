import * as React from "react";

const Button = ({ variant, children }) => {
  const className = variant === "primary"? "primary-button" : "secondary-button";
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;