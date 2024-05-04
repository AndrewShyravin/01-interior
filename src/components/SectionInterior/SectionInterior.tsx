import React from 'react';
import '../SectionInterior/SectionInterior.css';
import btn__arrow from '../../image/arrow-btn.svg';

const SectionInteror = () => {
  return (
    <div className="section__interior">
      <div className="container">
        <div className="interior__inner">
          <h1>Let's Create Your Dream Interior</h1>
          <p>
            The world needs innovators and problem solvers who turn challenges
            into greater opportunities.
          </p>
          <button className="interior__btn">
            Get Started
            <img src={btn__arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionInteror;
