import { useEffect, useState } from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ count, savedKeywords }) {
  const getSavedKeywords = () => {
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
        {`Elise, you have ${count} saved articles`}
      </h2>
      <p className="saved-news-header__keywords">
        By keywords: <b>{getSavedKeywords()}</b>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
