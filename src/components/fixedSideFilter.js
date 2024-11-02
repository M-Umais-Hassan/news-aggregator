import FilterIcon from "../assets/icons/filter.svg";

const FixedSideFilter = ({ children, clearFilters }) => {
  return (
    <div className="filters">
      <div className="header">
        <h3>
          <img src={FilterIcon} alt="filter" />
          Filters
        </h3>
        <span onClick={clearFilters}>Clear Filters</span>
      </div>
      {children}
    </div>
  );
};

export default FixedSideFilter;
