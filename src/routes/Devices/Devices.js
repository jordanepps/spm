import React from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';
import './Devices.css';

function Devices() {
  return (
    <div className="device-container">
      <h1>Devices for sale</h1>
      {/* <form>
        <div className="sort-container">
          <input type="radio" name="price-sort" id="descending" />
          <label htmlFor="descending">Descending</label>
          <input type="radio" name="price-sort" id="ascending" />
          <label htmlFor="ascending">Ascending</label>
        </div>
        <div></div>
        <div className="filter-container">
          <input type="text" placeholder="filter" />
        </div>
      </form> */}
      <DeviceList />
    </div>
  );
}

export default Devices;
