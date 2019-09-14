import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/Context';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

function Login({ history }) {
  //   console.log(history.location.pathname);
  const [page, setCurrentPage] = useContext(PageContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = password.value = '';
        TokenService.saveAuthToken(res.authToken);
        history.push('/inventory-manager');
      })
      .catch(handleError);
  }

  function handleError(res) {
    setError(res.error);
  }

  function renderError() {
    return (
      <div>
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {!error ? '' : renderError()}
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
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            required
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
