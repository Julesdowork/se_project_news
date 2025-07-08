import { useState, useEffect } from "react";

import "./Main.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main({ allArticles, searchingState, handleSearchNews }) {
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [isShowingAll, setIsShowingAll] = useState(false);

  const handleShowMoreBtn = () => {
    setDisplayedArticles(allArticles);
    setIsShowingAll(true);
  };

  useEffect(() => {
    setDisplayedArticles([]);
    setDisplayedArticles(allArticles.slice(0, 3));
    setIsShowingAll(false);
  }, [allArticles]);

  return (
    <div className="page__content">
      <Header handleSearchNews={handleSearchNews} />
      {(allArticles.length > 0 || searchingState !== "") && (
        <main className="main">
          {(searchingState === "searching" ||
            searchingState === "not-found") && (
            <Preloader searchingState={searchingState} />
          )}
          {searchingState === "found" && (
            <div className="main__search-results">
              <h2 className="main__heading">Search results</h2>
              <NewsCardList articles={displayedArticles} />
              {!isShowingAll && (
                <button
                  type="button"
                  className="main__btn"
                  onClick={handleShowMoreBtn}
                >
                  Show more
                </button>
              )}
            </div>
          )}
        </main>
      )}
      <About />
    </div>
  );
}

export default Main;
