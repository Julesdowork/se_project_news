import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm() {
  const initialValue = { "search-news": "" };
  const { values, errors, isValid, handleChange } = useForm(initialValue);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="search-form">
      <h1 className="search-form__heading">What's going on in the world?</h1>
      <p className="search-form__body">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form__form" noValidate onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-news"
          id="search-news"
          className="search-form__input"
          placeholder="Enter topic"
          onChange={handleChange}
          value={values["search-news"]}
          required
        />
        <button
          type="submit"
          className="search-form__btn"
        >
          Search
        </button>
      </form>
      <p
        className={`search-form__body search-form__error ${
          errors["search-news"] ? "search-form__error_visible" : ""
        }`}
      >
        Please enter a keyword
      </p>
    </section>
  );
}

export default SearchForm;
