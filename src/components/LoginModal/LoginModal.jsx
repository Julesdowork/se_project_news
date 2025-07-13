import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function LoginModal({ onClose, isModalOpen, onAltButtonClicked, handleLogin }) {
  const initialValues = { email: "", password: "" };
  const { values, errors, isValid, handleChange } = useForm(initialValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      altButtonText="Sign up"
      onClose={onClose}
      isModalOpen={isModalOpen}
      formValid={isValid}
      onAltButtonClicked={onAltButtonClicked}
      onSubmit={handleSubmit}
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
          value={values.email}
          onChange={handleChange}
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
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
