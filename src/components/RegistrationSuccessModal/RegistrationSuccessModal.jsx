import Modal from "../Modal/Modal";

function RegistrationSuccessModal({ onClose, isModalOpen, onAltButtonClicked }) {
  return (
    <Modal
      name="registration-success"
      onClose={onClose}
      isModalOpen={isModalOpen}
    >
      <h2 className="modal__heading">Registration successfully completed!</h2>
      <p className="modal__body">
        <a href="#" className="modal__link" onClick={onAltButtonClicked}>
          Sign in
        </a>
      </p>
    </Modal>
  );
}

export default RegistrationSuccessModal;
