import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignUpButton = () => {
    setActiveModal("register");
  };

  const handleSignInButton = () => {
    setActiveModal("login");
  };

  const handleMobileMenuButton = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={<Main onSignUpButtonClicked={handleSignUpButton} />}
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
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
