import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <main className="main">
      <h2 className="main__heading">Search results</h2>
      <NewsCardList />
      <button type="button" className="main__btn">
        Show more
      </button>
    </main>
  );
}

export default Main;
