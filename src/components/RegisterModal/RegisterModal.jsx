import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, isModalOpen }) {
  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      altButtonText="Sign in"
      onClose={onClose}
      isModalOpen={isModalOpen}
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
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
