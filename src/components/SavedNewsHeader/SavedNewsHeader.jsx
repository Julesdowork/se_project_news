import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <header className="saved-news-header">
      <h1 className="saved-news-header__title">Saved articles</h1>
      <h2 className="saved-news-header__saved-count">
        Elise, you have 5 saved articles
      </h2>
      <p className="saved-news-header__keywords">
        By keywords: <b>Nature, Yellowstone, and 2 other</b>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
