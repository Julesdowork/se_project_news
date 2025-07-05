import "./NewsCard.css";
import { getDate } from "../../utils/newsApi";

import bookmarkIcon from "../../assets/bookmark.svg";

function NewsCard({ article }) {
  return (
    <li className="news-card">
      <a href={article.url} className="news-card__link">
        <img
          src={article.urlToImage}
          alt={`Image for ${article.title}`}
          className="news-card__img"
        />
        <button type="button" className="news-card__save-btn">
          <img
            src={bookmarkIcon}
            className="news-card__save-icon"
            alt="Click here to save this article"
          />
        </button>
        <div className="news-card__info">
          <p className="news-card__date">{getDate(article.publishedAt)}</p>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source.name}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
