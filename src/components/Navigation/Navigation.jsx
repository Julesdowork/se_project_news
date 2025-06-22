import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <p className="nav__title">NewsExplorer</p>
      <div className="nav__btn-group">
        <button className="nav__btn nav__btn_active">Home</button>
        <button className="nav__btn nav__btn_disabled">
          Saved articles
        </button>
        <button className="nav__btn nav__btn_signin">Sign in</button>
      </div>
    </nav>
  );
}

export default Navigation;
