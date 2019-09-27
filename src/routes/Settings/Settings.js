import React, { useContext, useEffect } from 'react';
import { PageContext } from '../../context/Context';
import Allowed from '../../components/Allowed/Allowed';

function Settings() {
  const [page, setCurrentPage] = useContext(PageContext);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <h2>Settings</h2>
      <Allowed />
    </div>
  );
}

export default Settings;
