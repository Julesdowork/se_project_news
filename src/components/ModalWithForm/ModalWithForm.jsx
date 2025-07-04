import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

function ModalWithForm({ name, title, altButtonText, onClose, isModalOpen, children }) {
  return (
    <Modal onClose={onClose} isModalOpen={isModalOpen}>
      <h2 className="modal__form-heading">{title}</h2>
      <form name={name} className="modal__form" noValidate>
        {children}
        <button type="submit" className="modal__submit-btn">
          {title}
        </button>
        <button type="button" className="modal__alt-btn">
          or <span className="modal__link">{altButtonText}</span>
        </button>
        <div className="modal__submit-area"></div>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
