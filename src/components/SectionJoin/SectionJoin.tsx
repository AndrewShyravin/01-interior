import React from 'react';
import './SectionJoin.css';
import btn__arrow from '../../image/arrow-btn-black.svg';

const SectionJoin = () => {
  return (
    <div className="section__join">
      <div className="container">
        <div className="join__inner">
          <h1 className="join__title">Wanna join the interno?</h1>
          <p className="join__text">Contact Us & Get a Free Consultation</p>
          <button className="join__btn">
            Connect With us
            <img src={btn__arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionJoin;
