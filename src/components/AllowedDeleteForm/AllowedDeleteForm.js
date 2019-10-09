import React from 'react';

function AllowedDeleteForm({ userToDelete, closeModal, deleteEmail }) {
  return (
    <div>
      <h3 className="modal-title">
        Are you sure you want to delete "{userToDelete}"?
      </h3>
      <p>
        The user's account <i>will be deleted</i> and they will not be able to
        login or register
      </p>
      <div>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={deleteEmail}>Delete</button>
      </div>
    </div>
  );
}

export default AllowedDeleteForm;
