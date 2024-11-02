import { useEffect } from "react";
import { headlinesListingThunk } from "../redux/newsReducer";
import useApi from "../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Button from "../components/storybook/button";
import MyFeed from "../components/myFeed";
import Preferences from "../components/myFeed/preferences";
import { feedSelectors } from "../redux/myFeed";

const MyFeedPage = () => {
  const [loading, invokeApi] = useApi();
  const dispatch = useDispatch();
  const preferences = useSelector(feedSelectors.preferences);

  const getMyFeedListing = async () => {
    // Reason for using headlines thunk is because everything or all news api do not support category filtering
    // author is also not availbale in the search so I have used query instead which will be aplicable on keywords
    try {
      await invokeApi(() =>
        dispatch(
          headlinesListingThunk({
            queryString: preferences?.author,
            sources: preferences?.sources?.map((el) => el?.value)?.join(","),
            category: preferences?.category?.value,
          })
        ).unwrap()
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyFeedListing();
  }, [preferences]);

  return (
    <>
      <h1 className="page__heading">My Feed</h1>
      <div className="preferences">
        <Preferences>
          <Button content="Set Preferences" />
        </Preferences>
      </div>
      <div className="news__page">
        <div className="news__list">
          <MyFeed loading={loading} />
        </div>
      </div>
    </>
  );
};

export default MyFeedPage;
