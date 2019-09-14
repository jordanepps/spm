import React, { useContext, useEffect } from 'react';
import { PageContext } from '../../context/Context';

function Inventory() {
  //   console.log(history.location.pathname);
  const [page, setCurrentPage] = useContext(PageContext);
  //   console.log(page);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return <div>Inventory Page</div>;
}

export default Inventory;
