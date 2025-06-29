import "./Navigation.css";

function Navigation({ isSavedNews }) {
  return (
    <nav className={`nav ${isSavedNews ? "nav_white-bg" : ""}`}>
      <p className={`nav__title ${isSavedNews ? "nav_text_black" : ""}`}>
        NewsExplorer
      </p>
      <div className="nav__btn-group">
        <button
          className={`nav__btn nav__btn_active ${
            isSavedNews ? "nav_text_black" : ""
          }`}
        >
          Home
        </button>
        <button
          className={`nav__btn "nav__btn_disabled" ${
            isSavedNews ? "nav__btn_active nav_text_black nav_border_black" : ""
          }`}
        >
          Saved articles
        </button>
        <button
          className={`nav__btn nav__btn_signin ${
            isSavedNews ? "nav_text_black nav_border_black" : ""
          }`}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
