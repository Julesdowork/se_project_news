import "./Modal.css";

function Modal({ name, children }) {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        <button type="button" className="modal__close-icon"></button>
      </div>
    </div>
  );
}

export default Modal;
