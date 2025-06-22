import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <h1 className="search-form__heading">What's going on in the world?</h1>
      <p className="search-form__body">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form__form">
        <input
          type="search"
          name="search-news"
          id="search-news"
          className="search-form__input"
          placeholder="Enter topic"
        />
        <button type="submit" className="search-form__btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
