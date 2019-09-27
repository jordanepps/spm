import React, { useState, useEffect } from 'react';
import AllowedApiService from '../../services/allowed-api-service';

function Allowed() {
  const [allowed, setAllowed] = useState([]);

  useEffect(() => {
    AllowedApiService.getAll()
      .then(res => res.json())
      .then(allowed => setAllowed(allowed))
      .catch(err => console.log(err));
  });

  return (
    <div>
      <h3>Emails allowed to register</h3>
    </div>
  );
}

export default Allowed;
