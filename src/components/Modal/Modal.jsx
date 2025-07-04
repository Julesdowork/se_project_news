import { useEffect } from "react";
import "./Modal.css";

function Modal({ onClose, isModalOpen, children }) {
  useEffect(() => {
    if (!isModalOpen) return;
  }, [onClose, isModalOpen]);

  return (
    <div className={`modal ${isModalOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        {children}
        <button
          type="button"
          className="modal__close-icon"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Modal;
