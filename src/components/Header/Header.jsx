import "./Header.css";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleSearchNews }) {
  return (
    <header className="header">
      <Navigation currentRoute="home" />
      <SearchForm handleSearchNews={handleSearchNews} />
    </header>
  );
}

export default Header;
