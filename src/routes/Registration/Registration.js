import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/Context';

function Registration() {
  const [page, setCurrentPage] = useContext(PageContext);
  const [error, setError] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(null);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, verify_password } = e.target;

    if (password.value !== verify_password)
      return setPasswordMatch('Password does not match');
  }

  function resetPasswordMatch() {
    setPasswordMatch(null);
  }

  function renderPasswordError() {
    return (
      <div>
        <h3>Passwords do not match</h3>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
          />
        </div>
        {!passwordMatch ? '' : renderPasswordError()}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            required
            onChange={resetPasswordMatch}
          />
        </div>
        <div>
          <label htmlFor="verify_password">Verify Password:</label>
          <input
            type="password"
            name="verify_password"
            id="verify_password"
            autoComplete="new-password"
            required
            onChange={resetPasswordMatch}
          />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
