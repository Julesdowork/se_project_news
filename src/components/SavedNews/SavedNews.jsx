import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ savedArticles, savedKeywords, handleDeleteArticle }) {
  return (
    <div className="page__content">
      <Navigation currentRoute="saved-news" />
      <SavedNewsHeader
        count={savedArticles.length}
        savedKeywords={savedKeywords}
      />
      <section className="saved-news">
        <NewsCardList
          articles={savedArticles}
          showAll={true}
          isSavedNews={true}
          handleDeleteArticle={handleDeleteArticle}
        />
      </section>
    </div>
  );
}

export default SavedNews;
