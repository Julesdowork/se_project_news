import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NewsCard.css";
import { getDate } from "../../utils/newsApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

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
  const { isLoggedIn } = useContext(CurrentUserContext);

  const handleSaveBtnClicked = () => {
    if (isSaved || !isLoggedIn) return;

    setIsSaved(true);
    handleSaveArticle(article);
  };

  const handleDeleteBtnClicked = () => {
    setIsSaved(false);
    handleDeleteArticle(article);
  };

  useEffect(() => {
    setIsSaved(article.isSaved);
  }, [isSaved]);

  return (
    <li className="news-card">
      <img
        src={article.urlToImage}
        alt={`Image for ${article.title}`}
        className="news-card__img"
      />
      {isSavedNews && (
        <span className="news-card__keyword">{article.keyword}</span>
      )}
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
        <span
          className={`${
            !isLoggedIn ? "news-card__tooltip" : ""
          } news-card_hidden`}
        >
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
        <span
          className={`${
            !isLoggedIn ? "news-card__tooltip" : ""
          } news-card_hidden`}
        >
          Remove from saved
        </span>
      </button>
      <div className="news-card__info">
        <Link to={article.url} className="news-card__link" target="_blank">
          <p className="news-card__date">{getDate(article.publishedAt)}</p>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source.name}</p>
        </Link>
      </div>
    </li>
  );
}

export default NewsCard;
