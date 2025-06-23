import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <ul className="news-card-list">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul>
  );
}

export default NewsCardList;
