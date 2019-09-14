import React, { useContext, useEffect } from 'react';
import { PageContext } from '../../context/Context';

function Registration() {
  const [page, setCurrentPage] = useContext(PageContext);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input />
        </div>
        <div>
          <label>Password:</label>
          <input />
        </div>
        <div>
          <label>Verify Password:</label>
          <input />
        </div>
      </form>
    </div>
  );
}

export default Registration;
