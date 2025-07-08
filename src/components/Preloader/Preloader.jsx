import "./Preloader.css";

function Preloader({ searchingState }) {
  return (
    <div className="preloader">
      <div
        className={`preloader__loading ${
          searchingState === "searching" ? "preloader_visible" : ""
        }`}
      >
        <div className="preloader__circle-preloader"></div>
        <p className="preloader__body">Searching for news...</p>
      </div>
      <div
        className={`preloader__not-found ${
          searchingState === "not-found" ? "preloader_visible" : ""
        }`}
      >
        <div className="preloader__icon"></div>
        <h2 className="preloader__heading">Nothing found</h2>
        <p className="preloader__body">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
}

export default Preloader;
