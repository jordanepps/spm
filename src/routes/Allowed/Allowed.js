import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import AllowedApiService from '../../services/allowed-api-service';
import { PageContext } from '../../context/Context';
import { Email, SubmitButton } from '../../components/Utils/Utils';

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
  const [page, setCurrentPage] = useContext(PageContext);
  const [allowed, setAllowed] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    AllowedApiService.getAll(setAllowed);
    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleAddEmail() {
    setDeleteModal(null);
    openModal();
  }

  function addEmail(e) {
    e.preventDefault();
    console.log(AllowedApiService.addEmail({ email: e.target.email.value }));
  }

  function handleDeleteEmail(id) {
    setDeleteModal(id);
    openModal();
  }

  function deleteEmail(id) {
    console.log(id);
    //Delete email from database
    //Close Modal
    //Show status
    //Rerender page
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <h3>Emails allowed to register</h3>
      <button onClick={handleAddEmail}>Add Email</button>
      <div>
        {allowed.map(user => (
          <div className="setting-card allowed" key={user.id}>
            <span>{user.email}</span>
            <button onClick={() => handleDeleteEmail(user.id)}>Delete</button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Allowed Modal"
      >
        {deleteModal ? (
          <div>
            <h3>
              Are you sure you want to delete "{allowed[deleteModal - 1].email}
              "?
            </h3>
            <div>
              <button onClick={closeModal}>Cancel</button>
              <button onClick={() => deleteEmail(allowed[deleteModal - 1].id)}>
                Delete
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={addEmail}>
            <Email />
            <SubmitButton name="Add email" />
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Allowed;
