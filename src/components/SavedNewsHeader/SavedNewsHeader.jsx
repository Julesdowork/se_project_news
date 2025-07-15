import { useContext } from "react";
import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ count, savedKeywords }) {
  const { currentUser } = useContext(CurrentUserContext);

  const getSavedKeywords = () => {
    if (!savedKeywords) return;

    let str = "";
    if (savedKeywords.length >= 1) {
      str += savedKeywords[0];
    }
    if (savedKeywords.length >= 2) {
      str += `, ${savedKeywords[1]}`;
    }
    if (savedKeywords.length > 2) {
      str += `, and ${savedKeywords.length - 2} others`;
    }
    return str;
  };

  return (
    <header className="saved-news-header">
      <h1 className="saved-news-header__title">Saved articles</h1>
      <h2 className="saved-news-header__saved-count">
        {`${currentUser.data.username}, you have ${count} saved articles`}
      </h2>
      <p className="saved-news-header__keywords">
        By keywords: <b>{getSavedKeywords()}</b>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
