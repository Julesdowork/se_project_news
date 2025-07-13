import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  showAll,
  isSavedNews,
  handleSaveArticle,
  handleDeleteArticle,
}) {
  return (
    <ul className={`news-card-list ${showAll ? "news-card-list_showAll" : ""}`}>
      {articles.map((article) => {
        return (
          <NewsCard
            key={article.link}
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
