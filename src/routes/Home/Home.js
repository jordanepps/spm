import React, { useEffect, useContext } from 'react';
import { PageContext } from '../../context/Context';
import './Home.css';

function Home({ history }) {
  const [page, setCurrentPage] = useContext(PageContext);
  useEffect(() => {
    setCurrentPage(true); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function onClick() {
    history.push('/devices');
  }
  return (
    <div className="home-container">
      <div className="top-section">
        <h1>
          Things happen. <br /> We can fix it.
        </h1>
        <span>
          SmartPhone Medic is the smart choice for all of your repair needs
        </span>
      </div>
      <div className="device-btn-container">
        <button onClick={onClick}>Devices for sale</button>
      </div>
    </div>
  );
}

export default Home;
