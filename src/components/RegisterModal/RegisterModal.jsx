import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  onClose,
  isModalOpen,
  onAltButtonClicked,
  handleRegistration,
}) {
  const initialValues = { email: "", password: "", username: "" };
  const { values, errors, isValid, setValues, setIsValid, handleChange } =
    useForm(initialValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      altButtonText="Sign in"
      onClose={onClose}
      isModalOpen={isModalOpen}
      formValid={isValid}
      onAltButtonClicked={onAltButtonClicked}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          name="email"
          id="register-email-input"
          placeholder="Enter email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          id="register-password-input"
          placeholder="Enter password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-username-input" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          name="username"
          id="register-username-input"
          placeholder="Enter your username"
          required
          value={values.username}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
