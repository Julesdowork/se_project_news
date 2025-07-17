import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";

function NewsCardList({
  articles,
  showAll,
  isSavedNews,
  handleSaveArticle,
  handleDeleteArticle,
}) {
  const [initialArticles, setInitialArticles] = useState([]);

  const getInitialArticles = (num) => {
    const result = [];
    for (let i = 0; i < num; i++) {
      result.push(articles[i]);
    }
    setInitialArticles(result);
  };

  useEffect(() => {
    getInitialArticles(3);
  }, [articles]);

  return (
    <ul className={`news-card-list ${showAll ? "news-card-list_showAll" : ""}`}>
      {showAll
        ? articles.map((article) => {
            return (
              <NewsCard
                key={article.url}
                article={article}
                isSavedNews={isSavedNews}
                handleSaveArticle={handleSaveArticle}
                handleDeleteArticle={handleDeleteArticle}
              />
            );
          })
        : initialArticles.map((article) => {
            return (
              <NewsCard
                key={article.url}
                article={article}
                isSavedNews={isSavedNews}
                handleSaveArticle={handleSaveArticle}
                handleDeleteArticle={handleDeleteArticle}
              />
            );
          })}
    </ul>
  );
}

export default NewsCardList;
