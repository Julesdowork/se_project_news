import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader";

function Main() {
  return (
    <main className="main">
      <h2 className="main__heading">Search results</h2>
      <NewsCardList />
      <button type="button" className="main__btn">
        Show more
      </button>
      <Preloader />
    </main>
  );
}

export default Main;
