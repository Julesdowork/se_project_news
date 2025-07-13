import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { filterNewsData, apiKey } from "../../utils/newsApi";
import { checkResponses } from "../../utils/api";
import { authorizeUser, registerUser, checkToken } from "../../utils/auth";
import { getToken, setToken, removeToken } from "../../utils/token";

import "./App.css";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";

import HeaderControlsContext from "../../contexts/HeaderControlsContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchingState, setSearchingState] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [savedKeywords, setSavedKeywords] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
    setIsModalOpen(false);
  };

  const handleSignUpButton = () => {
    setActiveModal("register");
    setIsModalOpen(true);
  };

  const handleSignInButton = () => {
    setIsMobileMenuOpen(false);
    setActiveModal("login");
    setIsModalOpen(true);
  };

  const handleMobileMenuButton = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchNews = (keyword) => {
    setSearchingState("searching");
    fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}&from=2025-06-30&to=2025-07-06`
    )
      .then(checkResponses)
      .then((data) => {
        if (newsArticles.length > 0) {
          setNewsArticles([]);
        }

        const articles = filterNewsData(data);
        if (articles.length === 0) {
          setSearchingState("not-found");
        } else {
          setSearchingState("found");
          setNewsArticles(articles);
          setCurrentKeyword(keyword);
        }
      })
      .catch(console.error);
  };

  const handleSaveArticle = (article) => {
    setSavedArticles([...savedArticles, article]);

    if (!savedKeywords.includes(currentKeyword)) {
      setSavedKeywords([...savedKeywords, currentKeyword]);
    }
  };

  const handleDeleteArticle = (article) => {
    setSavedArticles((prevArticles) =>
      prevArticles.filter((item) => item.id !== article.id)
    );
  };

  const handleRegistration = ({ email, password, username }) => {
    registerUser(email, password, username)
      .then((user) => {
        closeActiveModal();
        setActiveModal("registration-success");
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    authorizeUser(email, password)
      .then((token) => {
        setToken(token);
        return checkToken(token);
      })
      .then((data) => {
        closeActiveModal();
        console.log(data);
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page">
        <HeaderControlsContext.Provider
          value={{
            isMobileMenuOpen: isMobileMenuOpen,
            isModalOpen,
            handleMobileMenuButton,
            handleSignInButton,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  allArticles={newsArticles}
                  searchingState={searchingState}
                  handleSearchNews={handleSearchNews}
                  handleSaveArticle={handleSaveArticle}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  savedArticles={savedArticles}
                  savedKeywords={savedKeywords}
                  handleDeleteArticle={handleDeleteArticle}
                />
              }
            />
          </Routes>
        </HeaderControlsContext.Provider>
        <Footer />
        <RegisterModal
          onClose={closeActiveModal}
          isModalOpen={activeModal === "register"}
          onAltButtonClicked={handleSignInButton}
          handleRegistration={handleRegistration}
        />
        <LoginModal
          onClose={closeActiveModal}
          isModalOpen={activeModal === "login"}
          onAltButtonClicked={handleSignUpButton}
          handleLogin={handleLogin}
        />
        <RegistrationSuccessModal
          onClose={closeActiveModal}
          isModalOpen={activeModal === "registration-success"}
          onAltButtonClicked={handleSignInButton}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
