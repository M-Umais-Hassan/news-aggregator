import React from "react";
import SearchIcon from "../../assets/icons/search.svg";

const Input = ({
  type = "text",
  name = "",
  value = "",
  placeholder = "Type here",
  handleChange,
  icon = "",
  border = "",
}) => {
  return (
    <div className="sb__input">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`icon__${icon} ${border}`}
      />
      {icon && <img className={icon} src={SearchIcon} alt="search" />}
    </div>
  );
};

export default Input;
