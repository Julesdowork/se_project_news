import { useState } from "react";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <About />
        <Footer />
      </div>
      <RegisterModal />
      <LoginModal />
      <RegistrationSuccessModal />
    </div>
  );
}

export default App;
