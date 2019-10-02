import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../context/Context';
import './Settings.css';

function Settings({ history }) {
  const [page, setCurrentPage] = useContext(PageContext);
  const path = history.location.pathname;

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <Link to={`${path}/allowed`}>Allowed Users</Link>
      <Link to="/">Locations</Link>
      <Link to="/">Device Make</Link>
      <Link to="/">Device Model</Link>
      <Link to="/">Device Color</Link>
      <Link to="/">Device Storage</Link>
      <Link to="/">Device Carrier</Link>
    </div>
  );
}

export default Settings;
