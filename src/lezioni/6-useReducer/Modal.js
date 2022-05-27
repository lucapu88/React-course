import React from 'react';

const Modal = ({ modalContent, isModalOpen, closeModal }) => {
  if (isModalOpen) {
    return (
      <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
        <h1>Modal</h1>
        <div>{modalContent || "non c'è un modalContent"}</div>
        <button className="on-hover" onClick={closeModal}>
          {' '}
          Close
        </button>
      </div>
    );
  }
};

export default Modal;
