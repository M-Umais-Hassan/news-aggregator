import { useSelector } from "react-redux";
import { newsSelectors } from "../../redux/newsReducer";
import NewsItem from "../newsItem";

const News = ({ loading }) => {
  const newsListing = useSelector(newsSelectors.newsListingData);

  if (loading) return "Loading...";

  if (!newsListing?.length) return newsListing?.message || "Nothing to show";

  return newsListing?.map((el) => <NewsItem item={el} />);
};

export default News;
