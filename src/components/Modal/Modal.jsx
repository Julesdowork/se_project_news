import { useEffect } from "react";
import "./Modal.css";
import closeIcon from "../../assets/xmark.svg";

function Modal({ onClose, isModalOpen, children }) {
  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscPressed = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscPressed);

    return () => {
      document.removeEventListener("keydown", handleEscPressed);
    };
  }, [onClose, isModalOpen]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isModalOpen ? "modal_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="modal__content">
        {children}
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        >
          <img src={closeIcon} alt="Click to close modal" className="modal__close-icon" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
