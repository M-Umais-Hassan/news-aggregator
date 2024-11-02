import DefaultImage from "../assets/images/default-img.jpg";
import { getSlicedText } from "../utils/helpers";
import Button from "./storybook/button";

const NewsItem = ({ item }) => {
  return (
    <div className="news__item">
      <img src={item?.urlToImage || DefaultImage} alt="Article" />
      <div className="content">
        <h1>{getSlicedText(item?.title, 40)}</h1>
        <p style={{ height: "50px" }}>{getSlicedText(item?.description)}</p>
        <span>Published By: {item?.author || "-"}</span>
        <Button content="Read more" size="md" variant="primary" />
      </div>
    </div>
  );
};

export default NewsItem;
