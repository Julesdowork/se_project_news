import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect } from "react";

function NewsCardList({ articles }) {
  useEffect(() => {
  }, [articles]);

  return (
    <ul className="news-card-list">
      {articles.map((article) => {
        return <NewsCard key={article.source.id} article={article} />;
      })}
    </ul>
  );
}

export default NewsCardList;
