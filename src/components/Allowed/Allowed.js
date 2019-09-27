import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AllowedApiService from '../../services/allowed-api-service';
import { Email, SubmitButton } from '../Utils/Utils';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Allowed() {
  const [allowed, setAllowed] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AllowedApiService.getAll(setAllowed);
  }, []);

  function handleAddEmail(e) {
    e.preventDefault();
    // console.log({ email: e.target.email.value });
    console.log(AllowedApiService.addEmail({ email: e.target.email.value }));
  }

  function handleDeleteEmail() {}

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <h3>Emails allowed to register</h3>
      <button onClick={openModal}>Add Email</button>
      <div>
        {allowed.map(user => (
          <div key={user.id}>
            <span>{user.email}</span>
            <button onClick={handleDeleteEmail}>Delete</button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Allowed Modal"
        closeTimeoutMS={2000}
      >
        <form onSubmit={handleAddEmail}>
          <Email />
          <SubmitButton name="Add email" />
        </form>
      </Modal>
    </div>
  );
}

export default Allowed;
