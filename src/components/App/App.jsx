import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import { defaultNewsArticles } from "../../utils/constants";
import { filterNewsData, apiKey } from "../../utils/newsApi";
import { checkResponses } from "../../utils/api";

import "./App.css";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";

import HeaderControlsContext from "../../contexts/HeaderControlsContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);

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
    console.log(keyword);
    fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}&from=2025-06-30&to=2025-07-06`
    )
      .then(checkResponses)
      .then(console.log)
      .catch(console.error);
  };

  useEffect(() => {
    const articlesData = filterNewsData(defaultNewsArticles);
    setNewsArticles(articlesData);
  }, []);

  return (
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
                articles={newsArticles}
                handleSearchNews={handleSearchNews}
              />
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </HeaderControlsContext.Provider>
      <Footer />
      <RegisterModal
        onClose={closeActiveModal}
        isModalOpen={activeModal === "register"}
        onAltButtonClicked={handleSignInButton}
      />
      <LoginModal
        onClose={closeActiveModal}
        isModalOpen={activeModal === "login"}
        onAltButtonClicked={handleSignUpButton}
      />
      <RegistrationSuccessModal
        onClose={closeActiveModal}
        isModalOpen={activeModal === "registration-success"}
      />
    </div>
  );
}

export default App;
