import React from 'react';
import { SecondaryButton } from '../Utils/Utils';
import './AllowedItem.css';

function AllowedItem({ user, handleDelete }) {
  return (
    <div className="setting-card-allowed">
      <p>{user.email}</p>
      <SecondaryButton onClick={() => handleDelete(user)} name="Delete" />
    </div>
  );
}

export default AllowedItem;
