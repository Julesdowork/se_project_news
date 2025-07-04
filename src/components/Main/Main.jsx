import "./Main.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main({ onSignUpButtonClicked }) {
  return (
    <div className="page__content">
      <Header onSignUpButtonClicked={onSignUpButtonClicked} />
      <main className="main">
        <h2 className="main__heading">Search results</h2>
        <NewsCardList />
        <button type="button" className="main__btn">
          Show more
        </button>
        <Preloader />
      </main>
      <About />
    </div>
  );
}

export default Main;
