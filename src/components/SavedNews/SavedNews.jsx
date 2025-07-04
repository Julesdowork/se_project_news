import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <div className="page__content">
      <Navigation isSavedNews={true} />
      <SavedNewsHeader />
      <section className="saved-news">
        <NewsCardList />
      </section>
    </div>
  );
}

export default SavedNews;
