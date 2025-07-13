import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import HeaderControlsContext from "../../contexts/HeaderControlsContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import menuIcon from "../../assets/bars.svg";
import closeIcon from "../../assets/xmark.svg";
import signOutIcon from "../../assets/right-from-bracket.svg";

function Navigation({ isSavedNews }) {
  const {
    isMobileMenuOpen,
    isModalOpen,
    handleMobileMenuButton,
    handleSignInButton,
  } = useContext(HeaderControlsContext);

  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <nav className={`nav ${isSavedNews ? "nav_white-bg" : ""}`}>
      <div className="nav__main">
        <Link to="/" className="nav__link">
          <p className={`nav__title ${isSavedNews ? "nav_text_black" : ""}`}>
            NewsExplorer
          </p>
        </Link>
        <button
          type="button"
          className={`nav__menu-btn  ${
            isModalOpen ? "nav__menu-btn_hidden" : ""
          }`}
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
          <Link to="/">
            <button
              className={`nav__btn nav__btn_active ${
                isSavedNews ? "nav_text_black" : ""
              }`}
            >
              Home
            </button>
          </Link>
          {isLoggedIn && (
            <Link to="/saved-news">
              <button
                className={`nav__btn "nav__btn_disabled" ${
                  isSavedNews
                    ? "nav__btn_active nav_text_black nav_border_black"
                    : ""
                }`}
              >
                Saved articles
              </button>
            </Link>
          )}
          {isLoggedIn ? (
            <button
              className={`nav__btn nav__btn_type_signout ${
                isSavedNews ? "nav_text_black nav_border_black" : ""
              }`}
              onClick={handleSignInButton}
            >
              {currentUser.data.username}
              <img
                src={signOutIcon}
                alt="Click here to sign out of account"
                className={`nav__btn-icon ${
                  isSavedNews ? "nav_icon_black" : ""
                }`}
              />
            </button>
          ) : (
            <button
              className={`nav__btn nav__btn_type_signin ${
                isSavedNews ? "nav_text_black nav_border_black" : ""
              }`}
              onClick={handleSignInButton}
            >
              Sign in
            </button>
          )}
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
          onClick={handleSignInButton}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
