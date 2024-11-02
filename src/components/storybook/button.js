import React from "react";

const Button = ({
  type = "submit",
  variant = "primary",
  content = "Click me",
  size = "md",
  handleClick,
  loading,
  ...rest
}) => {
  return (
    <button
      className={`sb__button ${size} ${variant}`}
      type={type}
      onClick={handleClick}
      {...rest}
    >
      {loading ? "Loading..." : content}
    </button>
  );
};

export default Button;
