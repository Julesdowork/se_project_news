import { useEffect, useContext } from "react";
import "./Navigation.css";
import HeaderControlsContext from "../../contexts/HeaderControlsContext";
import menuIcon from "../../assets/bars.svg";
import closeIcon from "../../assets/xmark.svg";

function Navigation({ isSavedNews, onSignUpButtonClicked }) {
  const { isMobileMenuOpen, handleMobileMenuButton } = useContext(
    HeaderControlsContext
  );

  return (
    <nav className={`nav ${isSavedNews ? "nav_white-bg" : ""}`}>
      <div className="nav__main">
        <p className={`nav__title ${isSavedNews ? "nav_text_black" : ""}`}>
          NewsExplorer
        </p>
        <button
          type="button"
          className="nav__menu-btn"
          onClick={handleMobileMenuButton}
        >
          <img
            src={isMobileMenuOpen ? closeIcon : menuIcon}
            className={`nav__menu-btn-icon ${
              isSavedNews ? "nav_icon_black" : ""
            }`}
            alt="Click to open or close the menu"
          />
        </button>
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
            onClick={onSignUpButtonClicked}
          >
            Sign in
          </button>
        </div>
      </div>
      <div
        className={`nav__menu ${isSavedNews ? "nav__menu_white" : ""} ${
          isMobileMenuOpen ? "nav__menu_opened" : ""
        }`}
      >
        <button className={`nav__btn ${isSavedNews ? "nav_text_black" : ""}`}>
          Home
        </button>
        <button
          className={`nav__btn nav__btn_disabled ${
            isSavedNews ? "nav__btn_active nav_text_black nav_border_black" : ""
          }`}
        >
          Saved articles
        </button>
        <button
          className={`nav__btn nav__btn_signin ${
            isSavedNews ? "nav_text_black nav_border_black" : ""
          }`}
          onClick={onSignUpButtonClicked}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
