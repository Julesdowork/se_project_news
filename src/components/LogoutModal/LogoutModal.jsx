import Modal from "../Modal/Modal";
import "../Modal/Modal.css";

function LogoutModal({ onClose, isModalOpen, onConfirm }) {
  return (
    <Modal onClose={onClose} isModalOpen={isModalOpen}>
      <h2 className="modal__heading">Are you sure you want to sign out?</h2>
      <div className="modal__btn-group">
        <button
          className="modal__btn modal__btn_type_confirm"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button className="modal__btn modal__btn_type_deny" onClick={onClose}>
          No
        </button>
      </div>
    </Modal>
  );
}

export default LogoutModal;
