import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import AllowedApiService from '../../services/allowed-api-service';
import { PageContext } from '../../context/Context';
import AllowedItem from '../../components/AllowedItem/AllowedItem';
import AllowedAddForm from '../../components/AllowedAddForm/AllowedAddForm';
import AllowedDeleteForm from '../../components/AllowedDeleteForm/AllowedDeleteForm';
import { Button } from '../../components/Utils/Utils';
import './Allowed.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Allowed() {
  // eslint-disable-next-line
  const [page, setCurrentPage] = useContext(PageContext);
  const [loadPage, setLoadPage] = useState(1);
  const [allowed, setAllowed] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [addError, setAddError] = useState(null);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    AllowedApiService.getAll(setAllowed);
    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadPage]);

  function load() {
    closeModal();
    setLoadPage(loadPage + 1);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleAddEmail() {
    setUserToDelete(null);
    openModal();
  }

  function addEmail(e) {
    e.preventDefault();
    setAddError(null);
    AllowedApiService.addEmail({ email: e.target.email.value }).then(res =>
      res.id ? load() : setAddError(res)
    );
  }

  function handleDeleteEmail(user) {
    setUserToDelete(user.email);
    openModal();
  }

  function deleteEmail() {
    //Get ID of email to be deleted
    const id = allowed.filter(users => users.email === userToDelete)[0].id;
    //Delete email from database
    AllowedApiService.deleteEmail(id).then(load);
  }

  return (
    <div className="allowed-container">
      <h3>Emails allowed to register</h3>
      <div className="allowed-list-container">
        {allowed.map(user => (
          <AllowedItem
            key={user.id}
            user={user}
            handleDelete={handleDeleteEmail}
          />
        ))}
      </div>
      <Button name="Add Email" onClick={handleAddEmail} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add/Delete Allowed Modal"
      >
        {userToDelete ? (
          <AllowedDeleteForm
            userToDelete={userToDelete}
            closeModal={closeModal}
            deleteEmail={deleteEmail}
          />
        ) : (
          <AllowedAddForm
            addEmail={addEmail}
            addError={addError}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </div>
  );
}

export default Allowed;
