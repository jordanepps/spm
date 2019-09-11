import React from 'react';
import './Home.css';
import home from '../../img/home.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="top-section">
        <img src={home} />
        <h1>
          Things happen. <br /> We can fix it.
        </h1>
        <span>
          SmartPhone Medic is the smart choice for all of your repair needs
        </span>
      </div>
    </div>
  );
}

export default Home;
