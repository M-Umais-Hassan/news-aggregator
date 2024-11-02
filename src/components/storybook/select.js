import ReactSelect from "react-select";

const Select = ({
  options,
  loading,
  isSearchable = true,
  isClearable = true,
  isMulti = false,
  handleChange,
  placeholder = "Select",
  ...rest
}) => {
  return (
    <ReactSelect
      {...rest}
      className="sb__input"
      options={options}
      isLoading={loading}
      isDisabled={loading}
      isSearchable={isSearchable}
      isClearable={isClearable}
      isMulti={isMulti}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Select;
