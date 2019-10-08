import React from 'react';
import './AllowedItem.css';

function AllowedItem({ user, handleDelete }) {
  return (
    <div className="setting-card-allowed">
      <span>{user.email}</span>
      <button onClick={() => handleDelete(user)}>Delete</button>
    </div>
  );
}

export default AllowedItem;
