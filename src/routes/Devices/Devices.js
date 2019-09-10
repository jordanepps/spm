import React from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';
import './Devices.css';

import phone from '../../TESTSTORE';

function Devices() {
  console.log(phone);
  return (
    <div>
      <h1>Devices for sale</h1>
      <form>
        <div className="sort-container">
          <input type="radio" name="price-sort" id="high-low" />
          <label htmlFor="high-low">High-Low</label>
          <input type="radio" name="price-sort" id="low-high" />
          <label htmlFor="low-high">Low-High</label>
        </div>
        <div></div>
        <div className="filter-container">
          <input type="text" placeholder="filter" />
        </div>
      </form>
      <DeviceList />
    </div>
  );
}

export default Devices;
