import { useSelector } from "react-redux";
import { newsSelectors } from "../../redux/newsReducer";
import NewsItem from "../newsItem";

const MyFeed = ({ loading }) => {
  const headlinesListing = useSelector(newsSelectors.headlinesListingData);

  if (loading) return "Loading...";

  if (!headlinesListing?.length)
    return headlinesListing?.message || "Nothing to show";

  return headlinesListing?.map((el) => <NewsItem item={el} />);
};

export default MyFeed;
