import { useContext, useEffect, useState } from "react";
import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader({
  count,
  savedKeywords,
  savedArticles,
  updateKeywords,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [keywords, setKeywords] = useState([]);

  const displayKeywords = () => {
    if (!keywords) return;

    let str = "";
    if (keywords.length >= 1) {
      str += keywords[0];
    }
    if (keywords.length >= 2) {
      str += `, ${keywords[1]}`;
    }
    if (keywords.length > 2) {
      str += `, and ${keywords.length - 2} others`;
    }
    return str;
  };

  useEffect(() => {
    setKeywords(updateKeywords());
  }, [savedKeywords]);

  return (
    <header className="saved-news-header">
      <h1 className="saved-news-header__title">Saved articles</h1>
      <h2 className="saved-news-header__saved-count">
        {`${currentUser.data.username}, you have ${count} saved articles`}
      </h2>
      <p className="saved-news-header__keywords">
        By keywords: <b>{displayKeywords()}</b>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
