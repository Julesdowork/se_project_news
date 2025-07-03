import "./Navigation.css";

import menuIcon from "../../assets/bars.svg";
import closeIcon from "../../assets/close-icon.svg";

function Navigation({ isSavedNews, isMobileMenuOpened }) {
  return (
    <nav className={`nav ${isSavedNews ? "nav_white-bg" : ""}`}>
      <div className="nav__main">
        <p className={`nav__title ${isSavedNews ? "nav_text_black" : ""}`}>
          NewsExplorer
        </p>
        <button type="button" className="nav__menu-btn">
          <img
            src={isMobileMenuOpened ? closeIcon : menuIcon}
            className="nav__menu-btn-icon"
            alt="Click to open or close the menu"
          />
        </button>
        <div className={`nav__btn-group`}>
          <button
            className={`nav__btn nav__btn_active ${
              isSavedNews ? "nav_text_black" : ""
            }`}
          >
            Home
          </button>
          <button
            className={`nav__btn "nav__btn_disabled" ${
              isSavedNews
                ? "nav__btn_active nav_text_black nav_border_black"
                : ""
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
      </div>
      <div className="nav__menu">
        <button className={`nav__btn ${isSavedNews ? "nav_text_black" : ""}`}>
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
