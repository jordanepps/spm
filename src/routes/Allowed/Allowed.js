import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import AllowedApiService from '../../services/allowed-api-service';
import { PageContext } from '../../context/Context';
import { Email } from '../../components/Utils/Utils';

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
  const [loadPage, setLoadPage] = useState(1);
  const [allowed, setAllowed] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [addError, setAddError] = useState(null);

  const load = () => {
    setLoadPage(loadPage + 1);
  };

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    AllowedApiService.getAll(setAllowed);
    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadPage]);

  function handleAddEmail() {
    setDeleteModal(null);
    openModal();
  }

  function addEmail(e) {
    e.preventDefault();
    setAddError(null);
    AllowedApiService.addEmail({ email: e.target.email.value }).then(res => {
      if (res.id) {
        closeModal();
        load();
      }
      setAddError(res);
    });
  }

  function handleDeleteEmail(user) {
    setDeleteModal(user.id);
    setUserToDelete(user.email);
    openModal();
  }

  function deleteEmail(id) {
    //Close Modal
    closeModal();
    //Delete email from database
    AllowedApiService.deleteEmail(id).then(() => {
      //Show status

      //Rerender
      load();
    });
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
            <button onClick={() => handleDeleteEmail(user)}>Delete</button>
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
            <h3>Are you sure you want to delete "{userToDelete}"?</h3>
            <div>
              <button onClick={closeModal}>Cancel</button>
              <button onClick={() => deleteEmail(allowed[deleteModal - 1].id)}>
                Delete
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={addEmail}>
            <p>{addError}</p>
            <Email />
            <p onClick={closeModal}>Cancel</p>
            <input type="submit" value="Add" />
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Allowed;
