import React from 'react';

function AllowedDeleteForm({ userToDelete, closeModal, deleteEmail }) {
  return (
    <div>
      <h3>Are you sure you want to delete "{userToDelete}"?</h3>
      <p>
        User's account will be deleted if exists and user will not be able to
        register
      </p>
      <div>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={() => deleteEmail()}>Delete</button>
      </div>
    </div>
  );
}

export default AllowedDeleteForm;
