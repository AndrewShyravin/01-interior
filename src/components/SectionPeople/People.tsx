import React from 'react';
import { PersonType } from '../../types';
import './People.css';
const People: React.FC<PersonType> = ({ photo, name, city, text }) => {
  return (
    <div className="people__person">
      <div className="person__info">
        <div className="person__photo">
          <img src={photo} alt="photo" />
        </div>
        <div>
          <h2 className="person__name">{name}</h2>
          <p className="person__city">{city}</p>
        </div>
      </div>
      <p className="person__text">{text}</p>
    </div>
  );
};

export default People;
