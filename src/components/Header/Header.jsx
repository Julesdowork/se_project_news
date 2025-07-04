import "./Header.css";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onSignUpButtonClicked }) {
  return (
    <header className="header">
      <Navigation onSignUpButtonClicked={onSignUpButtonClicked} />
      <SearchForm />
    </header>
  );
}

export default Header;
