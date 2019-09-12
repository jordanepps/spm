import React from 'react';
import './Home.css';

function Home({ history }) {
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
