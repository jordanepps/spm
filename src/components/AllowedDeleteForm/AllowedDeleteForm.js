import React from 'react';
import { ModalButtons } from '../Utils/Utils';

function AllowedDeleteForm({ userToDelete, closeModal, deleteEmail }) {
  return (
    <div>
      <h3 className="modal-title">
        Are you sure you want to delete "{userToDelete}"?
      </h3>
      <p>
        The user's account{' '}
        <b>
          <i>will be deleted</i>{' '}
        </b>
        and they will not be able to login or register.
      </p>
      <ModalButtons
        name="Delete"
        cancel={closeModal}
        modalAction={deleteEmail}
      />
    </div>
  );
}

export default AllowedDeleteForm;
