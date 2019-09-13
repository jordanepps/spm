import React, { useContext, useEffect } from 'react';
import { PageContext } from '../../context/Context';

function Login({ history }) {
  console.log(history.location.pathname);
  const [page, setCurrentPage] = useContext(PageContext);
  console.log(page);

  useEffect(() => {
    setCurrentPage(false);
  }, [page]);

  return <div>Login</div>;
}

export default Login;
