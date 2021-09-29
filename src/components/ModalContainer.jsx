import reactDom from 'react-dom';

export default function ModalContainer({ showModal ,setShowModal }) {
  //safeguard
  if (showModal === null) return null;

  return reactDom.createPortal(
    <div className="form-container">
      <button className="closeAdd" onClick={() => setShowModal(null)}>
        X
      </button>
      {showModal}
    </div>,
    document.getElementById("add-form-root")
  );
}
