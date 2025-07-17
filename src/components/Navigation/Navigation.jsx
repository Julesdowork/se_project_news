import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import HeaderControlsContext from "../../contexts/HeaderControlsContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import menuIcon from "../../assets/bars.svg";
import closeIcon from "../../assets/xmark.svg";
import signOutIcon from "../../assets/right-from-bracket.svg";

function Navigation({ currentRoute }) {
  const {
    isMobileMenuOpen,
    isModalOpen,
    handleMobileMenuButton,
    handleSignInButton,
    handleSignOutButton,
  } = useContext(HeaderControlsContext);

  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <nav
      className={`nav ${
        isMobileMenuOpen && currentRoute === "saved-news"
          ? "nav_mobile-open_white"
          : ""
      } ${isMobileMenuOpen ? "nav_mobile-open" : ""} ${
        currentRoute === "saved-news" ? "nav_white-bg" : ""
      }`}
    >
      <Link to="/" className="nav__link">
        <p
          className={`nav__title ${
            currentRoute === "saved-news" ? "nav_text_black" : ""
          }`}
        >
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
            currentRoute === "saved-news" ? "nav_icon_black" : ""
          }`}
          alt="Click to open or close the menu"
        />
      </button>
      <div
        className={`nav__btn-group ${
          isMobileMenuOpen ? "nav__btn-group_mobile" : ""
        } ${currentRoute === "saved-news" ? "nav_bg_white" : ""}`}
      >
        <Link to="/" className="nav__link">
          <button
            className={`nav__btn ${
              currentRoute === "home" ? "nav__btn_active" : ""
            } ${currentRoute === "saved-news" ? "nav_text_grey" : ""}`}
          >
            Home
          </button>
        </Link>
        {isLoggedIn && (
          <Link to="/saved-news" className="nav__link">
            <button
              className={`nav__btn ${
                currentRoute === "saved-news"
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
              currentRoute === "saved-news"
                ? "nav_text_black nav_border_black"
                : ""
            }`}
            onClick={handleSignOutButton}
          >
            {currentUser.data.username}
            <img
              src={signOutIcon}
              alt="Click here to sign out of account"
              className={`nav__btn-icon ${
                currentRoute === "saved-news" ? "nav_icon_black" : ""
              }`}
            />
          </button>
        ) : (
          <button
            className={`nav__btn nav__btn_type_signin ${
              currentRoute === "saved-news"
                ? "nav_text_black nav_border_black"
                : ""
            }`}
            onClick={handleSignInButton}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
