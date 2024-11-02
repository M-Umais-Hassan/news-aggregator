import Filters from "../components/headlines/headlineFilters";
import Headlines from "../components/headlines";
import { useEffect } from "react";
import { headlinesListingThunk } from "../redux/newsReducer";
import useApi from "../hooks/useApi";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const HeadlinesPage = () => {
  const [loading, invokeApi] = useApi();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const getParam = (param) => {
    return searchParams.get(param);
  };

  const getHeadlinesListing = async () => {
    try {
      await invokeApi(() =>
        dispatch(
          headlinesListingThunk({
            queryString: getParam("queryString"),
            sources: getParam("sources"),
            category: getParam("category"),
          })
        ).unwrap()
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeadlinesListing();
  }, [searchParams]);

  return (
    <>
      <h1 className="page__heading">Headlines</h1>
      <div className="news__page">
        <Filters pageLoading={loading} />
        <div className="news__list">
          <Headlines loading={loading} />
        </div>
      </div>
    </>
  );
};

export default HeadlinesPage;
