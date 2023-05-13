import React from 'react';
import './Modal.css';
function Modal({ children }) {
  return (
    <div className="modal-backdrop">
      <article className="modal">{children}</article>
    </div>
  );
}

export default Modal;
