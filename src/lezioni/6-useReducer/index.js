import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import reducer from './reducer';
import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
  isModalOpen: false,
  modalContent: 'bibibibibibibibibi',
};

const Index = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState('bibibibibibibibibi');
  // const openModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  //lo state è lo stato, e il dispatch "dispaccia" l'azione ovvero chiama la funzione che cambia poi lo stato
  const [state, dispatch] = useReducer(reducer, initialState);
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <div style={{ border: '1px solid green' }}>
      <h2>Use Reducer Component</h2>
      {!state.isModalOpen && (
        <button className="on-hover" onClick={openModal}>
          open
        </button>
      )}
      <Modal
        isModalOpen={state.isModalOpen}
        modalContent={state.modalContent}
        closeModal={closeModal}
      >
        {' '}
      </Modal>
    </div>
  );
};

export default Index;
