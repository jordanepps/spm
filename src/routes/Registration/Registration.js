import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/Context';
import AuthApiService from '../../services/auth-api-service';
import {
  Email,
  Password,
  VerifyPassword,
  SubmitButton
} from '../../components/Utils/Utils';

function Registration({ history }) {
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

    if (password.value !== verify_password.value)
      return setPasswordMatch('Password does not match');

    setError(null);

    AuthApiService.postUser({
      email: email.value,
      password: password.value
    })
      .then(user => {
        email.value = password.value = verify_password.value = '';
        history.push('/inventory-login');
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
        {!error ? '' : renderError()}
        <Email />
        {!passwordMatch ? '' : renderPasswordError()}
        <Password reset={resetPasswordMatch} />
        <VerifyPassword reset={resetPasswordMatch} />
        <SubmitButton name="Register" />

        {/* <div>
          <button>Register</button>
        </div> */}
      </form>
    </div>
  );
}

export default Registration;
