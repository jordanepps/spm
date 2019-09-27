import React, { useState, useEffect } from 'react';
import AllowedApiService from '../../services/allowed-api-service';

function Allowed() {
  const [allowed, setAllowed] = useState([]);

  useEffect(() => {
    AllowedApiService.getAll(setAllowed);
  }, [allowed]);

  return (
    <div>
      <h3>Emails allowed to register</h3>
      <button>Add Email</button>
      <div>
        {allowed.map(user => (
          <div key={user.id}>
            <span>{user.email}</span>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allowed;
