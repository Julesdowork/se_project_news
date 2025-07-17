import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

function ModalWithForm({
  name,
  title,
  altButtonText,
  onClose,
  isModalOpen,
  formValid,
  onAltButtonClicked,
  onSubmit,
  children,
}) {
  return (
    <Modal onClose={onClose} isModalOpen={isModalOpen}>
      <h2 className="modal__form-heading">{title}</h2>
      <form name={name} className="modal__form" noValidate onSubmit={onSubmit}>
        {children}
        <button
          type="submit"
          className="modal__submit-btn"
          disabled={!formValid ? "disabled" : ""}
        >
          {title}
        </button>
        <p className="modal__alt">
          or{" "}
          <span className="modal__link" onClick={onAltButtonClicked}>
            {altButtonText}
          </span>
        </p>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
