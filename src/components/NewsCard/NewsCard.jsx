import { useState } from "react";

import "./NewsCard.css";
import { getDate } from "../../utils/newsApi";

import bookmarkIcon from "../../assets/bookmark.svg";
import bookmarkSolidIcon from "../../assets/bookmark-solid.svg";
import trashCanIcon from "../../assets/trash-can.svg";

function NewsCard({
  article,
  isSavedNews,
  handleSaveArticle,
  handleDeleteArticle,
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveBtnClicked = () => {
    setIsSaved(true);
    handleSaveArticle(article);
  };

  const handleDeleteBtnClicked = () => {
    setIsSaved(false);
    handleDeleteArticle(article);
  };

  return (
    <li className="news-card">
      <img
        src={article.urlToImage}
        alt={`Image for ${article.title}`}
        className="news-card__img"
      />
      <button
        type="button"
        className={`news-card__btn ${isSavedNews ? "news-card_hidden" : ""}`}
        onClick={handleSaveBtnClicked}
      >
        <img
          src={isSaved ? bookmarkSolidIcon : bookmarkIcon}
          className={`news-card__icon ${
            isSaved ? "news-card__icon_type_saved" : ""
          }`}
          alt="Click here to save this article"
        />
        <span className="news-card__tooltip news-card_hidden">
          Sign in to save articles
        </span>
      </button>
      <button
        type="button"
        className={`news-card__btn ${!isSavedNews ? "news-card_hidden" : ""}`}
        onClick={handleDeleteBtnClicked}
      >
        <img
          src={trashCanIcon}
          className={`news-card__icon`}
          alt="Click here to remove article from your list"
        />
        <span className="news-card__tooltip news-card_hidden">
          Remove from saved
        </span>
      </button>
      <div className="news-card__info">
        <a href={article.url} className="news-card__link">
          <p className="news-card__date">{getDate(article.publishedAt)}</p>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source.name}</p>
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
