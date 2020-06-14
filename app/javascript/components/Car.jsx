import React from 'react';
import './Car.css'
function Car({ car }) {

  return (
    <div className="section">
      <div className="inner-section">
     <div className={`picture section-${car.alt}`}>
       </div>
      <div className="content">
  <h2>{car.model}</h2>
      </div>
      </div>
     </div>
  );
}

export default Car;
