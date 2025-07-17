import { useState, useEffect } from "react";

import "./Main.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main({
  allArticles,
  searchingState,
  handleSearchNews,
  handleSaveArticle,
}) {
  const [isShowingAll, setIsShowingAll] = useState(false);

  const handleShowMoreBtn = () => {
    setIsShowingAll(true);
  };

  useEffect(() => {
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
              <NewsCardList
                articles={allArticles}
                showAll={isShowingAll}
                handleSaveArticle={handleSaveArticle}
              />
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
