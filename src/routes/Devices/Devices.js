import React from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';
import './Devices.css';

function Devices() {
  return (
    <div className="device-container">
      <h1>Devices for sale</h1>
      <DeviceList />
    </div>
  );
}

export default Devices;
