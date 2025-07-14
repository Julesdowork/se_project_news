import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

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
        <span className="modal__error">{errors.email}</span>
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
          minLength={2}
          value={values.password}
          onChange={handleChange}
        />
        <span className="modal__error">{errors.password}</span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
