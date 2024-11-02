import Filters from "../components/news/newsfilters";
import News from "../components/news";
import { useEffect } from "react";
import { newsListingThunk } from "../redux/newsReducer";
import useApi from "../hooks/useApi";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const NewsPage = () => {
  const [loading, invokeApi] = useApi();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const getParam = (param) => {
    return searchParams.get(param);
  };

  const getNewsListing = async () => {
    try {
      await invokeApi(() =>
        dispatch(
          newsListingThunk({
            queryString: getParam("queryString"),
            sources: getParam("sources"),
            category: getParam("category"),
            date: getParam("date"),
          })
        ).unwrap()
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsListing();
  }, [searchParams]);

  return (
    <>
      <h1 className="page__heading">All News</h1>
      <div className="news__page">
        <Filters pageLoading={loading} />
        <div className="news__list">
          <News loading={loading} />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
