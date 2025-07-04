import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose, isModalOpen, onAltButtonClicked }) {
  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      altButtonText="Sign up"
      onClose={onClose}
      isModalOpen={isModalOpen}
      onAltButtonClicked={onAltButtonClicked}
    >
      <label htmlFor="login-email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          name="email"
          id="login-email-input"
          placeholder="Enter email"
          required
        />
      </label>
      <label htmlFor="login-password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          id="login-password-input"
          placeholder="Enter password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
