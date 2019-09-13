import React, { useEffect, useContext } from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';
import { PageContext } from '../../context/Context';

import './Devices.css';

function Devices() {
  const [page, setCurrentPage] = useContext(PageContext);
  useEffect(() => {
    setCurrentPage(true); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="device-container">
      <h1>Devices for sale</h1>
      <DeviceList />
    </div>
  );
}

export default Devices;
