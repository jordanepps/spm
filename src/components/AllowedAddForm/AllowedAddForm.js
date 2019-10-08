import React from 'react';
import { Email } from '../Utils/Utils';

function AllowedAddForm({ addEmail, addError, closeModal }) {
  return (
    <form onSubmit={addEmail}>
      <p>{addError}</p>
      <Email />
      <p onClick={closeModal}>Cancel</p>
      <input type="submit" value="Add" />
    </form>
  );
}

export default AllowedAddForm;
