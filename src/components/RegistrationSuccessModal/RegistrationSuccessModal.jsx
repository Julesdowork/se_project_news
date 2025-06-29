import Modal from "../Modal/Modal";

function RegistrationSuccessModal() {
  return (
    <Modal name="registration-success">
      <h2 className="modal__heading">Registration successfully completed!</h2>
      <p className="modal__body">
        <a href="#" className="modal__link">
          Sign in
        </a>
      </p>
    </Modal>
  );
}

export default RegistrationSuccessModal;
