import React from 'react';
import arrow from '../../image/arrow.svg';
import { useState } from 'react';
import { ProjectType } from '../../types';
import './Projects.css';

const Projects: React.FC<ProjectType> = ({ photo, title, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="projects__item">
      <img src={photo} alt="photo" />
      <div className="projects__bottom">
        <div className="project__text">
          <p className="item__title">{title}</p>
          <p className="item__text">{text}</p>
        </div>
        <button onClick={openModal} className="project__btn">
          <img src={arrow} alt="arrow" />
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="window">
              <img src={photo} alt="photo" />
              <p className="item__title">{title}</p>
              <p className="item__text">{text}</p>
              <button className="project__btn" onClick={closeModal}>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
