import React, { cloneElement, useEffect, useState } from "react";
import Button from "../storybook/button";
import Input from "../storybook/input";
import { useDispatch, useSelector } from "react-redux";
import { feedSelectors, setPreferences } from "../../redux/myFeed";
import Select from "../storybook/select";
import { CATEGORIES } from "../../utils/constants";
import useApi from "../../hooks/useApi";
import { newsSelectors, sourcesListingThunk } from "../../redux/newsReducer";

const Preferences = ({ children }) => {
  const [show, setShow] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(null);
  const preferences = useSelector(feedSelectors.preferences);
  const dispatch = useDispatch();
  const sourcesListing = useSelector(newsSelectors.sourcesListingData);
  const [loading, invokeApi] = useApi();

  const getSourcesListing = async () => {
    try {
      await invokeApi(() => dispatch(sourcesListingThunk()).unwrap());
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => setShow((prev) => !prev);

  const handleClick = () => {
    dispatch(setPreferences(tempPreferences));
    alert("Preferences saved successfully");
    handleModal();
  };

  useEffect(() => {
    getSourcesListing();
    setTempPreferences(preferences);
  }, []);

  return (
    <>
      {children &&
        cloneElement(children, {
          onClick: handleModal,
        })}
      <div className={`overlay ${show ? "show" : ""}`} onClick={handleModal} />
      <div className={`modal ${show ? "show" : ""}`}>
        <h3>Set your preferences</h3>
        <p>
          You can choose your preferences from here and can setup your feed
          accordingly
        </p>
        <Input
          border="border-primary"
          type="text"
          value={tempPreferences?.author}
          handleChange={(e) =>
            setTempPreferences({ ...tempPreferences, author: e.target.value })
          }
          name="author"
          placeholder="Keywords or a phrase"
        />
        <Select
          name="category"
          options={CATEGORIES}
          value={tempPreferences?.category}
          handleChange={(value) => {
            setTempPreferences({ ...tempPreferences, category: value });
          }}
          placeholder="Category"
          isMulti={false}
          isClearable={true}
          isSearchable={true}
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
          value={tempPreferences?.sources}
          handleChange={(value) => {
            setTempPreferences({ ...tempPreferences, sources: value });
          }}
          placeholder="Select sources"
          loading={loading}
          disabled={loading}
          isMulti={true}
          isClearable={true}
          isSearchable={true}
        />
        <Button
          content="Save"
          variant="primary"
          size="block"
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default Preferences;
