import { useEffect, useState } from "react";
import { EMPTY_STATE } from "../../utils/constants";
import Input from "../storybook/input";
import Button from "../storybook/button";
import { newsSelectors, sourcesListingThunk } from "../../redux/newsReducer";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../hooks/useApi";
import Select from "../storybook/select";
import { useSearchParams } from "react-router-dom";
import FixedSideFilter from "../fixedSideFilter";

const Filters = ({ pageLoading }) => {
  const [filters, setFilters] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, invokeApi] = useApi();
  const dispatch = useDispatch();
  const sourcesListing = useSelector(newsSelectors.sourcesListingData);

  const handleFilters = (e) => {
    const { name, value } = e?.target || EMPTY_STATE;
    setFilters({ ...filters, [name]: value });
  };

  const handleSelect = ({ name, value }) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleClick = () => {
    const sources = filters?.sources?.map((el) => el?.value)?.join(",") || "";
    const queryString = filters?.queryString || "";
    const date = filters?.date || "";
    setSearchParams({ queryString, sources, date });
  };

  const getSourcesListing = async () => {
    try {
      await invokeApi(() => dispatch(sourcesListingThunk()).unwrap());
    } catch (error) {
      console.log(error);
    }
  };

  const getSourceLabel = (val) =>
    sourcesListing?.length
      ? sourcesListing?.find((el) => el?.id === val)?.name
      : "";

  const initialFilters = () => {
    const queryFilters = {
      queryString: searchParams.get("queryString"),
      date: searchParams.get("date"),
      sources: searchParams.get("sources")
        ? searchParams
            .get("sources")
            ?.split(",")
            ?.map((el) => ({ value: el, label: getSourceLabel(el) }))
        : null,
    };

    return queryFilters;
  };

  const clearFilters = () => {
    setSearchParams({ category: "", sources: [], queryString: "" });
    setFilters({ category: null, sources: [], queryString: "" });
  };

  useEffect(() => {
    if (sourcesListing) setFilters(initialFilters());
  }, [sourcesListing]);

  useEffect(() => {
    getSourcesListing();
  }, []);

  return (
    <FixedSideFilter clearFilters={clearFilters}>
      <Input
        name="queryString"
        type="text"
        value={filters?.queryString}
        handleChange={handleFilters}
        placeholder="Search by title or description"
        icon="start"
      />
      <Input
        name="date"
        type="date"
        value={filters?.date}
        handleChange={handleFilters}
        placeholder="Select Date"
      />
      <Select
        name="sources"
        options={
          sourcesListing?.length
            ? sourcesListing?.map((el) => ({
                label: el?.name,
                value: el?.id,
              }))
            : []
        }
        value={filters?.sources}
        handleChange={(value) => {
          handleSelect({
            name: "sources",
            value,
          });
        }}
        placeholder="Select sources"
        loading={loading}
        disabled={loading}
        isMulti={true}
        isClearable={true}
        isSearchable={true}
      />
      <Button
        content="Apply"
        size="block"
        variant="light"
        handleClick={handleClick}
        loading={pageLoading}
        disabled={loading || pageLoading}
      />
    </FixedSideFilter>
  );
};

export default Filters;
