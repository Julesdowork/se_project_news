import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { getNewsArticles, filterNewsData } from "../../utils/newsApi";
import { authorizeUser, registerUser, checkToken } from "../../utils/auth";
import { getToken, setToken, removeToken } from "../../utils/token";

import "./App.css";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Overlay from "../Overlay/Overlay";

import HeaderControlsContext from "../../contexts/HeaderControlsContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();

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

  const handleSignOutButton = () => {
    setIsMobileMenuOpen(false);
    setActiveModal("logout");
    setIsModalOpen(true);
  };

  const handleMobileMenuButton = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchNews = (keyword) => {
    setSearchingState("searching");
    getNewsArticles(keyword)
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
    article.keyword = currentKeyword;
    article.isSaved = true;
    setSavedKeywords([...savedKeywords, currentKeyword]);
  };

  const handleDeleteArticle = (article) => {
    article.isSaved = false;
    setSavedArticles(savedArticles.filter((item) => item.url !== article.url));
    removeKeywordFromSaved(article.keyword);
  };

  const removeKeywordFromSaved = (keyword) => {
    const tempArray = [...savedKeywords];
    const index = tempArray.indexOf(keyword);
    tempArray.splice(index, 1);
    setSavedKeywords(tempArray);
  };

  const updateKeywords = () => {
    let result = [];
    savedKeywords.map((keyword) => {
      if (!result.includes(keyword)) {
        result.push(keyword);
      }
    });
    return result;
  };

  const handleRegistration = ({ email, password, username }) => {
    registerUser(email, password, username)
      .then(() => {
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
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    closeActiveModal();
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  useEffect(() => {
    const token = getToken();

    if (!token) return;

    checkToken(token)
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page page_mobile-menu_open">
        <HeaderControlsContext.Provider
          value={{
            isMobileMenuOpen: isMobileMenuOpen,
            isModalOpen,
            handleMobileMenuButton,
            handleSignInButton,
            handleSignOutButton,
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
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    savedArticles={savedArticles}
                    savedKeywords={savedKeywords}
                    handleDeleteArticle={handleDeleteArticle}
                    updateKeywords={updateKeywords}
                  />
                </ProtectedRoute>
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
        <LogoutModal
          onClose={closeActiveModal}
          isModalOpen={activeModal === "logout"}
          onConfirm={handleLogout}
        />
        <Overlay isMobileMenuOpen={isMobileMenuOpen}></Overlay>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
